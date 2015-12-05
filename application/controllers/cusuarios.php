<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cusuarios extends CI_Controller { 

	public function __construct() {
        parent::__construct(); 
	 	$this->load->helper('url'); 
        $this->load->model("musuarios");
        $this->load->model("mpartidas");
    }
	public function index() {
		session_start();
		if(@$_SESSION['individuoId']=="") {
			$this->load->view('registro.html');
		}else{
			redirect(base_url()."cpartidas/juego");
		}
	}
	public function registroIndividuo() {

		error_reporting(0);

		//$estado = $this->musuarios->buscarDniExiste();
		
		$estado = false;

		if ($estado) {
			echo json_encode(array('success' => false));
		} 
		else {
			$usuarioId = $this->musuarios->registroIndividuo();
			$partidaId = $this->mpartidas->registroNuevaPartida($usuarioId);
			
			$this->musuarios->sendEmail();

			session_start();
	        $_SESSION['individuoId'] = $usuarioId;
	        $_SESSION['tipoPartida'] = $this->input->post("tipo_partida_id");
	        $_SESSION['partidaId'] = $partidaId;
			echo json_encode(array('success' => $partidaId));
			
		}
	}

	public function verDatosIndividuo() {
		$data = $this->musuarios->verDatosIndividuo();
		echo json_encode(array('datos' => $data));
	}

	public function eliminarIndividuo() {
		$data = $this->musuarios->eliminarIndividuo();
		echo json_encode(array('success' => true));
	}

	public function salir() {
		session_start();
		session_destroy();
		redirect(base_url());	
	}

	public function admin() {	

		session_start();
		if (@$_SESSION['adminId']==1) {
			redirect(base_url()."cpartidas/participantes");
		} else {
			$this->load->view("login.html");
		}
			
	}

	public function loginAdmin() {
		$user = $this->input->post("username");
		$pass = $this->input->post("password");

		if ($user == "admin" && $pass == "b29da41") {
			session_start();
			$_SESSION['adminId']=1;

			echo json_encode(array('success' => true));
		} else {
			echo json_encode(array('success' => false));
		}
		
	}
}

?>
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio extends CI_Controller {
	function __construct() {
	parent::__construct();
 	$this->load->helper('url');
	} 
 
	public function index() {
		session_start();

		if(@$_SESSION['individuoId']=='') {
			$this->load->view('index.html');
		}else{
			redirect(base_url()."cpreguntas/juego");
		}
	}

	public function terminos_condiciones() {
		session_start();
		$this->load->view('terminos.html');
	}

}

?>
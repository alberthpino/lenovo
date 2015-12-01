<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cpartidas extends CI_Controller {

	function __construct() {
		parent::__construct();
	 	$this->load->helper('url');
	 	$this->load->library("pagination");
	 	$this->load->model("mpartidas");
	 	$this->load->model("musuarios");
	} 

	public function actualizarDatosPartida(){
		session_start();
		$data = $this->mpartidas->actualizarDatosPartida();
		echo json_encode(array('success' => $data));
	}

	public function ranking()
	{

		$this->load->view("ranking.html");

	}

	public function infoRanking()
	{
		session_start();
		$data = $this->mpartidas->getRankingGlobal();
		if(@$_SESSION['individuoId']=="") {
			$data2 = false;
		} else {
			$data2 = $this->mpartidas->getRankingPersonal();
		}

		session_destroy();

		echo json_encode(array('ranking' => $data, 'puntos' => $data2));
	}

	public function getRankingPersonal()
	{
		session_start();
		$data = $this->mpartidas->getRankingPersonal();
		echo json_encode(array('partida' => $data));
	}

	public function getPreguntaActual()
	{
		session_start();
		$partida = $this->mpartidas->getPreguntaActual();
		echo json_encode(array('orden' => $partida->partida_pregunta));
	}

	public function participantes()
	{
		session_start();
		
		if ($_SESSION['adminId'] == 1) {

			$config = array();
	        $config["base_url"] = base_url() . "cpartidas/participantes";
	        $config["total_rows"] = $this->musuarios->individuos_count();
	        $config["per_page"] = 10;
	        $config["uri_segment"] = 3;

	        $config['full_tag_open'] = '<ul class="pagination">';
	        $config['full_tag_close'] = '</ul>';
	        $config['first_link'] = false;
	        $config['last_link'] = false;
	        $config['first_tag_open'] = '<li>';
	        $config['first_tag_close'] = '</li>';
	        $config['prev_link'] = '&laquo';
	        $config['prev_tag_open'] = '<li class="prev">';
	        $config['prev_tag_close'] = '</li>';
	        $config['next_link'] = '&raquo';
	        $config['next_tag_open'] = '<li>';
	        $config['next_tag_close'] = '</li>';
	        $config['last_tag_open'] = '<li>';
	        $config['last_tag_close'] = '</li>';
	        $config['cur_tag_open'] = '<li class="active"><a href="#">';
	        $config['cur_tag_close'] = '</a></li>';
	        $config['num_tag_open'] = '<li>';
	        $config['num_tag_close'] = '</li>';

	        $this->pagination->initialize($config);
	        $page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
	        $data["results"] = $this->musuarios->getParticipantes($config["per_page"], $page);
	        $data["links"] = $this->pagination->create_links();
	        $data['pagina'] = $page;

	        $this->load->view("participantes.html", $data);



		} 

		else{
			
			redirect($base_url."cusuarios/admin");

		}

	}

}

?>
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cpreguntas extends CI_Controller {

	function __construct() {
		parent::__construct();
	 	$this->load->helper('url');
	} 

	public function juego(){
		session_start();
		
		if(@$_SESSION['individuoId']=='') {
			redirect(base_url());
		}else{
			if ($_SESSION['tipoPartida'] == 1) {
				$this->load->view('estudio.html');
			} else {
				$this->load->view('trabajo.html');
			}
		}
	}

}

?>
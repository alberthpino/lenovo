<?php 
class Mpartidas extends CI_Model{
    private $partida_id;
    private $usuario_id;
    private $partida_aciertos;
    private $partida_fallos;
    private $partida_tiempo;
    private $tipo_partida_id;

    public function __construct() {
        parent::__construct();  
        $this->partida_id = $this->input->post('partida_id');
        $this->usuario_id = $this->input->post('usuario_id');
        $this->partida_aciertos = $this->input->post('partida_aciertos');
        $this->partida_fallos = $this->input->post('partida_fallos');
        $this->partida_tiempo = $this->input->post('partida_tiempo');
        $this->tipo_partida_id = $this->input->post('tipo_partida_id');
    }

    public function registroNuevaPartida($usuario_id) { 
        $date = date('Y-m-d H:i:s');
        $data = array ( 
                        'usuario_id' => $usuario_id,
                        'partida_aciertos' => 0,
                        'partida_fallos' => 0,
                        'partida_tiempo' => 0,
                        'tipo_partida_id' => $this->tipo_partida_id,
                        'partida_fecha_inicio' => $date,
                    );
        $this->db->insert("partidas",$data);
        if ($this->db->affected_rows() > 0) { 
            return $this->db->insert_id();
        } 
        else {
            return false;
        }
    }

    public function actualizarDatosPartida()
    {
        $date = date('Y-m-d H:i:s');
        $partidaId = $_SESSION['partidaId'];
        
        $this->db->where('partida_id',$partidaId);
        $this->db->set('partida_fallos', ' partida_fallos+'.$this->partida_fallos, FALSE);
        $this->db->set('partida_aciertos', ' partida_aciertos+'.$this->partida_aciertos, FALSE);
        $this->db->set('partida_tiempo', 'partida_tiempo+'.$this->partida_tiempo, FALSE);
        $this->db->set('partida_pregunta', 'partida_pregunta+1', FALSE);
        $this->db->set('partida_fecha_fin', $date);
        
        $this->db->update('partidas');

        $affected_rows = $this->db->affected_rows();
        
        if ($affected_rows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function getRankingGlobal()
    {
        $this->db->from("partidas p");
        $this->db->join("individuos i","p.usuario_id = i.individuo_id");
        $this->db->order_by("p.partida_aciertos", "desc"); 
        $this->db->order_by("p.partida_tiempo", "asc");
        $this->db->limit(5);
        $query = $this->db->get();

        if ($query->num_rows() > 0) {
            return $query->result_array();
        }else{
            return false;
        }
    }

    public function getRankingPersonal()
    {
        $individuoId = $_SESSION['individuoId'];
        $this->db->from("partidas p");
        $this->db->where("usuario_id", $individuoId);
        $query = $this->db->get();

        if ($query->num_rows() > 0) {
            return $query->row();
        }else{
            return false;
        }
    }

    public function getPreguntaActual()
    {
        $partidaId = $_SESSION['partidaId'];
        $this->db->from("partidas p");
        $this->db->where("partida_id", $partidaId);
        $query = $this->db->get();
        return $query->row();
    }

}
?>
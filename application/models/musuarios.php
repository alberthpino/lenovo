<?php 
class Musuarios extends CI_Model{
    private $usuario_id;
    private $usuario_nombre;
    private $usuario_clave;
    private $usuario_email;
    private $usuario_tipo_id;

    public function __construct() {
        parent::__construct();  
        $this->usuario_id = $this->input->post('individuo_id');
        $this->usuario_nombres = $this->input->post('individuo_nombres');
        $this->usuario_apellidos = $this->input->post('individuo_apellidos');
        $this->usuario_dni = $this->input->post('individuo_dni')."";
        $this->usuario_movil = $this->input->post('individuo_movil');
        $this->usuario_email = $this->input->post('individuo_email');
    }

    public function registroIndividuo() { 
        $data = array ( 
                        'individuo_nombres' => $this->usuario_nombres,
                        'individuo_apellidos' => $this->usuario_apellidos,
                        'individuo_dni' => $this->usuario_dni,
                        'individuo_movil' => $this->usuario_movil,
                        'individuo_email' => $this->usuario_email,
                    );

        $this->db->insert("individuos",$data);
        
        if ($this->db->affected_rows() > 0) { 
            
            return $this->db->insert_id();
        
        } 
        else {
            return false;
        }

    }


    public function sendEmail () {

        $mail_destinatario = $this->usuario_email;
        $from = 'Lenovo Serie y Gamer';
        $headers = 'From: '.$from;
        $asunto = 'Confirmación de Registro - Lenovo';
        $mensaje = ''.
                '\nEstimado(a) '.$this->usuario_nombres.':\n'.
                'Usted acaba de registrarse en el concurso de Lenovo Serie y Gamer.\n\n'.
                'Sus datos registrados son los siguientes:\n\n'.
                'Nombres y Apellidos: ' . $this->usuario_nombres.', '. $this->usuario_apellidos.
                '\nDni: ' .  $this->usuario_dni.
                '\nMovil: ' .  $this->usuario_movil.
                '\nEmail: ' .  $this->usuario_email.
                '\n\nGracias por participar.';

        @mail($mail_destinatario, $asunto, stripcslashes($mensaje), $headers);

    }
    
    public function buscarDniExiste()
    {
        $data_where  = array('individuo_dni' => $this->usuario_dni);
        $this->db->from("individuos");
        $this->db->where($data_where);
        $query = $this->db->get();
        if ($query->num_rows() > 0) {
            return true;
        }else{
            return false;
        }
    }
    
    public function updateAccount() {
        $usuarioId = $_SESSION['usuarioId']; 
        $data = array(
                    'usuario_email' => $this->usuario_email
                );
        $this->db->where('usuario_id', $usuarioId);
        $this->db->update('usuarios', $data);
        $affected_rows = $this->db->affected_rows();
        if ($affected_rows > 0) {
            return true;
        } else {
            return false;
        } 
    }

    public function individuos_count() {
        return $this->db->count_all("individuos");
    }

    public function getParticipantes($limit, $start) {
        
        $this->db->join("partidas p"," p.usuario_id = i.individuo_id","left");
        $this->db->order_by("p.partida_aciertos", "desc"); 
        $this->db->order_by("p.partida_tiempo", "asc");

        $this->db->limit($limit, $start);
        $query = $this->db->get("individuos i");

        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
   }

   public function verDatosIndividuo()
   {
        $data_where = $arrayName = array('individuo_id' => $this->usuario_id);
        $this->db->join("partidas p"," p.usuario_id = i.individuo_id","left");
        $this->db->where($data_where);
        $query = $this->db->get("individuos i");

       if ($query->num_rows() > 0) {
            return $query->row();
       }else{
            return false;
       }
   }

   public function eliminarIndividuo()
   {
        $data = array('individuo_id' => $this->usuario_id);
        $this->db->delete('individuos', $data); 

        if ($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        } 
   }

}
?>
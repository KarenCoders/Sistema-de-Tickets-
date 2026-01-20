const TICKET_TYPES = {
  CORRECTIVO: 'Correctivo',
  ADAPTATIVO: 'Adaptativo',
  PERFECTIVO: 'Perfectivo',
  PREVENTIVO: 'Preventivo'
};

const TICKET_STATUS = {
  ABIERTO: 'Abierto',
  RESUELTO: 'Resuelto'
};

const SEVERITY_LEVELS = {
  BAJA: 'Baja',
  MEDIA: 'Media',
  ALTA: 'Alta'
};

const DEFAULT_CODE = `// Pega tu código aquí
var x = 10;
function test(){
  if(x == 10){
    alert("Error");
  }
}`;

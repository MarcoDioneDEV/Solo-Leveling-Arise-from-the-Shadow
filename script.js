var nivel = 1;
var EqualizadoDoNivel = 1;
var cristal = 0;
var ouro = 0;
var PedraDeEssencia = 0;

var vida = 100;
var fadiga = 0;
var mana = 10;
var AumentoDoNivelDaMana = 20;
var agilidade = 10;
var forca = 10;
var percepcao = 10;
var inteligencia = 10;

var experienciaKargalgan = 0;
var experienciaBaruka = 0;
var experienciaElfos = 0;
var experienciaUrsos = 0;
var experienciaCentopeias = 0;
var experienciaYoo = 0;
var experienciaParaUsarNasHabilidades = 0;
var experienciaKang = 0;
var experienciaCerberus = 0;
var experienciaGoblin = 0;
var experienciaLican = 0;
var experienciaAranha = 0;
var experienciaKasaka = 0;
var experienciaInsectoids = 0;
var experienciaCacadores = 0;
var  experienciaKinChul = 0;

var atributo = 0;
var treino = 0;
var dia = 1;

var RecompensaDaClasseMago = 0;
var RecompensaDaClasseHealer = 0;
var RecompensaDoTitulo50Cristais = 0;
var RecompensaDoTitulo999Cristais = 0;
var RecompensaDaMisaoDiaria = 0;
var RecompensaDiaria = 0;

var SomaPedraDeEssenciaKargalgan = 0;
var SomaDoIndicadorDoNivel = 6;
var SomaDaPocaoDeRecuperacao = 0;
var SomaDaPocaoDeVida = 0;
var SomaDoNivel = 1;
var SomaDaPercepcao = 0;
var SomaDaForca = 0;
var SomaDosCristais = 0;
var SomaPedraDeEssenciaElfos = 0;
var SomaPedraDeEssenciaUrsos = 0;
var SomaPedraDeEssenciaBaruka = 0;
var SomaPedraDeEssenciaGoblin = 0;
var SomaPedraDeEssenciaAranha = 0;
var SomaPedraDeEssenciaLycan = 0;
var SomaDaPresaDeLycan = 0;
var SomaPedraDeEssenciaKasaka = 0;
var SomaPedraDeEssenciaCacadores = 0;
var SomaDaPedraDeEssenciaParaMissaDiaria = 0;

var AdagaDeBarukaEquipada = 0;
var ToqueDoDominadorEquipada = 0;
var EscudoEquipada = 0;
var ElmoEquipada = 0;
var AssassinaCavaleirosEquipada = 0;
var EspadaSimplesEquipada = 0;
var EspadaEquipada = 0;
var KasakaEquipada = 0;
var ColeiraEquipada = 0;

var TurnoDeLutaCentopeia = 0;
var VitoriaContraAsCentopeias = 0;
var Centopeias = 0;
var Magos = 0;
var Yoo = 0;
var Igris = 0;
var Kang = 0;
var Cerberus = 0;
var Cacadores = 0;
var Aranha = 0;
var Insectoids = 0;
var Ursos = 0;
var Elfos = 0;
var KinChul = 0;
var Baruka = 0;
var Kargalgan = 0;
var Goblin = 0;
var PopulacaoGoblin = 0;
var Lycan = 0;
var PopulacaoLycan = 0;
var PresaDeLycan = 0;
var Kasaka = 0;
var PopulacaoKasaka = 0;

var Kandiaru = 1;

var Provocar = 0;
var Fortalecimento = 0;
var Arrancada = 0;
var ArrancadaEmUso = 0;
var Assassina = 0;
var Furtividade = 0;

var SaudeElogenvidadeNivel2 = 0;
var ArrancadaNivel2 = 0;

var SombraIgris = 0;
var SombraMago = 0;
var SombraTank = 0;
var SombraIron = 0;

var ElixirDaVida = 0;
var FragmentoDaAvoreDaVida = 0;
var AguaNascenteDaFlorestaEcoante = 0;
var SanguePurificadoDoMonarcaDemoniaco = 0;

var TituloLordeDaMineracaoEstaEmUso = 0;
var TituloEntusiastaEstaEmUso = 0;
var TituloExterminadorDeGoblinsEstaEmUso = 0;
var TituloAssassinoDeLobosEstaEmUso = 0;
var TituloAdversidadeEstaEmUso = 0;

/*início da fução Deus*/
var Deus = 0;
function deus() {
  
  if (Deus === 0){

    alert("Você achou um Easter Egg e virou Deus no jogo, aproveite os prêmios");

    Deus = 1;
  
    agilidade = 1000;
    forca = 1000;
    percepcao = 1000;
    inteligencia = 1000;
    experienciaParaUsarNasHabilidades = 1000;
  
mana = 1000;
    ouro = 7450;
    cristal = 2000000;
    SomaDosCristais =  3910;

    atributo = 1000;
    SomaDaPocaoDeRecuperacao = 250;
    vida = 100;
    SomaDaPocaoDeVida = 125;
    FragmentoDaAvoreDaVida = 1000;
AguaNascenteDaFlorestaEcoante = 1;
SanguePurificadoDoMonarcaDemoniaco = 1;
SomaDaPedraDeEssenciaParaMissaDiaria = 36;

Lycan = 19;
Goblin = 10;
Magos = 2;
Kang = 1;
Ursos = 5;
KinChul = 1;

  }

  else if(Deus === 1){  /*pontos equivalente a todo a primeira parte do Jogo*/
alert("Pontos equivalente a todo a primeira parte do Jogo");
  agilidade = 55;
  forca = 69;
  percepcao = 61;
  inteligencia = 64;
  experienciaParaUsarNasHabilidades = 106;
  
  fadiga = 0;
  vida = 100;
  
  cristal = 9;
  SomaDosCristais =  14519;
  ouro = 516;
  SomaDaPocaoDeRecuperacao = 354;
  SomaDaPocaoDeVida = 157;
  SomaDaPedraDeEssenciaParaMissaDiaria = 36;
  dia = 10;
  nivel = 48;
  
  Kandiaru = 2;
  Goblin = 10;
  SomaDaPresaDeLycan = 20;
  PresaDeLycan = 20;
  Lycan = 20;
  Kasaka = 1;

  Cacadores = 1;
  Kang = 1;
  Cerberus = 1;
  Igris = 3;
  Magos = 2;
  Ursos = 5;
  Baruka = 2;


  mana = 5000;
  AumentoDoNivelDaMana = 60;
  atributo = 2;
}
    
  }
  
  /*fim da fução Deus*/

/*Início da função minerar cristais*/
function funcaominerarcristal() {
  
  /* Início apagar as mensagem de RETORNO */
  document.getElementById("idRetornoMissaoDiaria").innerHTML = "";   /* Remover Missão diária */
  document.getElementById("idatributopercepcao").innerHTML = ""; /* Remover Pontos de atributo */
  document.getElementById("idminerarcristal").innerHTML = "";  /* Remover Mensagem que mostra quantos Cristais foram minerados */
  document.getElementById("idTituloAlerta").innerHTML = ""; /* Remover Alerta dos títulos */

  document.getElementById("idRetornoTrocarXPporAprimoramentoDoDespertar",).innerHTML = ""; /* Remover Habilidade Segundo despertar */
  document.getElementById("idRetornoSaudeElogenvidade",).innerHTML = ""; /* Remover Habilidade Saúde e longevidade */
  document.getElementById("idRetornoElixirDaVida",).innerHTML = ""; /* Remover Habilidade Elixir da vida */
  document.getElementById("idRetornoAssassina",).innerHTML = ""; /* Remover Habilidade intenção assassina */
  document.getElementById("idRetornoFurtividade",).innerHTML = ""; /* Remover Habilidade Furtividade */
  document.getElementById("idRetornoArrancada",).innerHTML = ""; /* Remover Habilidade Arrancada */
  document.getElementById("idRetornoFortalecimento",).innerHTML = ""; /* Remover Habilidade Fortalecimento */
  document.getElementById("idRetornoProvocar",).innerHTML = ""; /* Remover Habilidade provocar */

  document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML = ""; /* Remover Poção de Recuperação */
  document.getElementById("idRetornoCompraPocaoVida").innerHTML = ""; /* Remover Poção de Vida */
  document.getElementById("idRetornoCompraPocaoMana").innerHTML = ""; /* Remover Poção de Mana */
  document.getElementById("idRetornoCompraEspadaComum").innerHTML = ""; /* Remover Adaga */
  document.getElementById("idRetornoCompraEspada").innerHTML = ""; /* Remover Espada */
  document.getElementById("idRetornoCompraEscudo").innerHTML = ""; /* Remover Defesa Divina */
  document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML = ""; /* Remover Assassina de Cavaleiros */

  document.getElementById("idvendercristal").innerHTML = ""; /* Remover Item Cristal de mana */
  document.getElementById("idvenderpedra").innerHTML = ""; /* Remover Item Pedra de essencia */
  document.getElementById("idvenderpresa").innerHTML = ""; /* Remover Item presa de Lycan */
  document.getElementById("idRetornoEquiparKasaka").innerHTML = ""; /* Remover Item Equipamento Kasaka */
  document.getElementById("idRetornoEquiparColeira").innerHTML = ""; /* Remover Item Equipamento Coleira do Cerberus  */
  document.getElementById("idRetornoEquiparToqueDoDominadorEquipada").innerHTML = ""; /* Remover Item Equipamento Toque do dominador  */
  document.getElementById("idRetornoEquiparElmo").innerHTML = ""; /* Remover Item Equipamento Elmo do Igris  */
  /*Fim apagar as mensagem de RETORNO*/

  if (fadiga < 100) {
    document.getElementById("idatributopercepcao").innerHTML = "";
    document.getElementById("idvendercristal").innerHTML = "";

    SomaDaPercepcao = percepcao - 9; 
    if (SomaDaPercepcao > 10) {
      SomaDaPercepcao = 10;
    }

    fadiga = fadiga + 11 - SomaDaPercepcao;
    cristal = cristal + SomaDaPercepcao;
    SomaDosCristais = SomaDosCristais + SomaDaPercepcao;

    if (fadiga > 100) {
      fadiga = 100;
    }

    if (fadiga < 1) {
      fadiga = 0;
    }

    if (SomaDosCristais > 999 && RecompensaDoTitulo50Cristais === 0) {
  
      RecompensaDoTitulo50Cristais = 1;
      
      alert(
        "Parabéns você trocou de Título e ganhou 5 Pontos de experiência. Novo título: Entusiasta da Mineração",
      );
      document.getElementById("idtitulo").innerHTML = "Novo Título disponível";

        document.getElementById("idTituloAlerta").innerHTML =   "⚠️";

      document.getElementById("idCheckEntusiasta").innerHTML = "⚠️ Título: Entusiasta da Mineração";
      document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
      document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
      document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";

        experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 5;
        document.getElementById( "idContarExperienciaNoQuadroHabilidades", ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;
        document.getElementById("idAlertaNoMenuHabilidade").innerHTML = "⚠️ Habilidades";

    
    }

    if (SomaDosCristais > 3999 && RecompensaDoTitulo999Cristais === 0) {
      RecompensaDoTitulo999Cristais = 1;
  
      alert(
        "Parabéns você trocou de Título e ganhou 5 Pontos de experiência. Novo título: Lorde da Mineração",
      );
      document.getElementById("idtitulo").innerHTML =  "Novo Título disponível";

         document.getElementById("idTituloAlerta").innerHTML = "⚠️";

      document.getElementById("idCheckLordeDaMineracao").innerHTML =   "⚠️ Título: Lorde da Mineração";

      document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
      document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";

        experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 5;
        document.getElementById( "idContarExperienciaNoQuadroHabilidades", ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;
        document.getElementById("idAlertaNoMenuHabilidade").innerHTML = "⚠️ Habilidades";
        
    }

    document.getElementById("idminerarcristal").innerHTML =
      "Cristais minerado: " + SomaDaPercepcao;

    if (dia === 1) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10 Cristais de Mana minerados: " + SomaDosCristais + "/10";
    }

    if (dia === 2) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 70 Cristais de Mana minerados: " + SomaDosCristais + "/70";
    }

    if (dia === 3) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 400 Cristais de Mana minerados: " + SomaDosCristais + "/400";
    }

    if (dia === 4) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 700 Cristais de Mana minerados: " + SomaDosCristais + "/700";
    }

    if (dia === 5) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 1500 Cristais de Mana minerados: " + SomaDosCristais + "/1500";
    }

    if (dia === 6) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 3500 Cristais de Mana minerados: " + SomaDosCristais + "/3500";
    }

    if (dia === 7) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 5000 Cristais de Mana minerados: " + SomaDosCristais + "/5000";
    }

    if (dia === 8) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 7000 Cristais de Mana minerados: " + SomaDosCristais + "/7000";
    }

    if (dia === 9) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/10000";
    }

    if (dia === 10) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 14.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/14000";
    }

    document.getElementById("idcristal").innerHTML =
      "Cristais de Mana: " + cristal;

    document.getElementById("idcristalinventario").innerHTML =
      "⚠️ Cristais de Mana: " + cristal;

     

    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    progresso.setAttribute("style", "width: " + fadiga + "%");
  } else {
    document.getElementById("idminerarcristal").innerHTML =
      "Sua Fadiga está em 100% [Compre poção de fadiga na loja de itens ou realize a missão diária para regarregar]";
  }
}
/* Fim da função minerar cristais */

/* Início da função minerar cristais ATÉ A FADIGA SER 100*/
function funcaominerarcristalAteAfadigaSer100() {

  document.getElementById("idAlertaNoMenuInventario").innerHTML =
  "⚠️ Inventário";

  /* Início apagar as mensagem de RETORNO */
  document.getElementById("idRetornoMissaoDiaria").innerHTML = "";   /* Remover Missão diária */
  document.getElementById("idatributopercepcao").innerHTML = ""; /* Remover Pontos de atributo */
  document.getElementById("idminerarcristal").innerHTML = "";  /* Remover Mensagem que mostra quantos Cristais foram minerados */
  document.getElementById("idTituloAlerta").innerHTML = ""; /* Remover Alerta dos títulos */

  document.getElementById("idRetornoTrocarXPporAprimoramentoDoDespertar",).innerHTML = ""; /* Remover Habilidade Segundo despertar */
  document.getElementById("idRetornoSaudeElogenvidade",).innerHTML = ""; /* Remover Habilidade Saúde e longevidade */
  document.getElementById("idRetornoElixirDaVida",).innerHTML = ""; /* Remover Habilidade Elixir da vida */
  document.getElementById("idRetornoAssassina",).innerHTML = ""; /* Remover Habilidade intenção assassina */
  document.getElementById("idRetornoFurtividade",).innerHTML = ""; /* Remover Habilidade Furtividade */
  document.getElementById("idRetornoArrancada",).innerHTML = ""; /* Remover Habilidade Arrancada */
  document.getElementById("idRetornoFortalecimento",).innerHTML = ""; /* Remover Habilidade Fortalecimento */
  document.getElementById("idRetornoProvocar",).innerHTML = ""; /* Remover Habilidade provocar */

  document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML = ""; /* Remover Poção de Recuperação */
  document.getElementById("idRetornoCompraPocaoVida").innerHTML = ""; /* Remover Poção de Vida */
  document.getElementById("idRetornoCompraPocaoMana").innerHTML = ""; /* Remover Poção de Mana */
  document.getElementById("idRetornoCompraEspadaComum").innerHTML = ""; /* Remover Adaga */
  document.getElementById("idRetornoCompraEspada").innerHTML = ""; /* Remover Espada */
  document.getElementById("idRetornoCompraEscudo").innerHTML = ""; /* Remover Defesa Divina */
  document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML = ""; /* Remover Assassina de Cavaleiros */

  document.getElementById("idvendercristal").innerHTML = ""; /* Remover Item Cristal de mana */
  document.getElementById("idvenderpedra").innerHTML = ""; /* Remover Item Pedra de essencia */
  document.getElementById("idvenderpresa").innerHTML = ""; /* Remover Item presa de Lycan */
  document.getElementById("idRetornoEquiparKasaka").innerHTML = ""; /* Remover Item Equipamento Kasaka */
  document.getElementById("idRetornoEquiparColeira").innerHTML = ""; /* Remover Item Equipamento Coleira do Cerberus  */
  document.getElementById("idRetornoEquiparToqueDoDominadorEquipada").innerHTML = ""; /* Remover Item Equipamento Toque do dominador  */
  document.getElementById("idRetornoEquiparElmo").innerHTML = ""; /* Remover Item Equipamento Elmo do Igris  */
  /*Fim apagar as mensagem de RETORNO*/

  while (fadiga < 100) {
    document.getElementById("idatributopercepcao").innerHTML = "";
    document.getElementById("idvendercristal").innerHTML = "";

    SomaDaPercepcao = percepcao - 9; 
    if (SomaDaPercepcao > 10) {
      SomaDaPercepcao = 10;
    }

    fadiga = fadiga + 11 - SomaDaPercepcao;
    cristal = cristal + SomaDaPercepcao;
    SomaDosCristais = SomaDosCristais + SomaDaPercepcao;

    if (fadiga > 100) {
      fadiga = 100;
    }

    if (fadiga < 1) {
      fadiga = 0;
    }

    if (SomaDosCristais > 999 && RecompensaDoTitulo50Cristais === 0) {
  
      RecompensaDoTitulo50Cristais = 1;
      atributo = atributo + 1;
      alert(
        "Parabéns você trocou de Título e ganhou 1 Ponto de atributo. Novo título: Entusiasta da Mineração",
      );
      document.getElementById("idtitulo").innerHTML = "Novo Título disponível";

        document.getElementById("idTituloAlerta").innerHTML =  "⚠️";

      document.getElementById("idCheckEntusiasta").innerHTML =   "⚠️ Título: Entusiata da Mineração";

      document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
      document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";
      document.getElementById("idTituloRetornoGoblins",).innerHTML = "";

      document.getElementById("idatributo").innerHTML =    "Disponíveis: " + atributo;
    }

    if (SomaDosCristais > 3999 && RecompensaDoTitulo999Cristais === 0) {
      RecompensaDoTitulo999Cristais = 1;
      atributo = atributo + 1;
      alert(
        "Parabéns você trocou de Título e ganhou 1 Ponto de atributo. Novo título: Lorde da Mineração",
      );
     
      document.getElementById("idtitulo").innerHTML =  "Novo Título disponível";

      document.getElementById("idTituloAlerta").innerHTML = "⚠️";

   document.getElementById("idCheckLordeDaMineracao").innerHTML =   "⚠️ Título: Lorde da Mineração";

   document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
   document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";

      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";
    }

    document.getElementById("idminerarcristal").innerHTML =
      "Cristais minerado: " + SomaDaPercepcao;

    if (dia === 1) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10 Cristais de Mana minerados: " + SomaDosCristais + "/10";
    }

    if (dia === 2) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 70 Cristais de Mana minerados: " + SomaDosCristais + "/70";
    }

    if (dia === 3) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 400 Cristais de Mana minerados: " + SomaDosCristais + "/400";
    }

    if (dia === 4) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 700 Cristais de Mana minerados: " + SomaDosCristais + "/700";
    }

    if (dia === 5) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 1500 Cristais de Mana minerados: " + SomaDosCristais + "/1500";
    }

    if (dia === 6) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 3500 Cristais de Mana minerados: " + SomaDosCristais + "/3500";
    }

    if (dia === 7) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 5000 Cristais de Mana minerados: " + SomaDosCristais + "/5000";
    }

    if (dia === 8) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 7000 Cristais de Mana minerados: " + SomaDosCristais + "/7000";
    }

    if (dia === 9) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/10000";
    }

    if (dia === 10) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 14.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/14000";
    }

    document.getElementById("idcristal").innerHTML =
      "Cristais de Mana: " + cristal;

    document.getElementById("idcristalinventario").innerHTML =
      "⚠️ Cristais de Mana: " + cristal;

      document.getElementById("idAlertaNoMenuInventario").innerHTML =
      "⚠️ Inventário";

    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    progresso.setAttribute("style", "width: " + fadiga + "%");
  } if(fadiga > 99) {
    document.getElementById("idminerarcristal").innerHTML =
      "Sua Fadiga está em 100% [Compre poção de fadiga na loja de itens ou realize a missão diária para regarregar]";
  }
  
}
/* Fim da função minerar cristais ATÉ A FADIGA SER 100*/

/*Início da fução atribuir pontos na Força*/
function funcaoatribuirforca() {
  if (atributo > 0) {
    document.getElementById("idminerarcristal").innerHTML = "";
    document.getElementById("idvendercristal").innerHTML = "";

    atributo = atributo - 1;

    document.getElementById("idatributopercepcao").innerHTML =
      "1 ponto de atributo adicionado";

    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

    forca = forca + 1;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    /*início da função subir de nível*/
    SomaDoNivel = SomaDoNivel + 1;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    document.getElementById("idatributopercepcao").innerHTML =
      "Você não possui nenhum Ponto de atributo disponível";
  }
}
/*Fim da função atribuir pontos na Força*/

/*início da função comprar poção de Vida*/
function funcaoComprarPocaoVida() {

  document.getElementById("idAlertaNoMenuLoja").innerHTML =
        "Loja";

  if (ouro > 4 && vida < 100) {
    vida = vida + 10;
    ouro = ouro - 5;
    SomaDaPocaoDeVida = SomaDaPocaoDeVida + 1;

    if (vida > 100) {
      vida = 100;
    }

    

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    progresso2.setAttribute("style", "width: " + vida + "%");

    document.getElementById("idRetornoCompraPocaoVida").innerHTML =
      "10% de Vida recuperada";

/*início do efeito de compra da poção de Vida*/
      var vidaContainer = document.getElementById("vida");
var seta = document.createElement("div");
seta.classList.add("seta-verde");
seta.textContent = "↑";
seta.style.left = document.getElementById("botao-vida").offsetLeft + document.getElementById("botao-vida").offsetWidth / 2 - 50 + "px";
seta.style.top = document.getElementById("botao-vida").offsetTop + document.getElementById("botao-vida").offsetHeight / 2 + "px";
vidaContainer.appendChild(seta);
seta.classList.add("seta-verde-animacao");
seta.style.opacity = 1;
setTimeout(function(seta) {
  seta.parentNode.removeChild(seta);
}, 1000, seta);
/*Fim do efeito de compra da poção de Vida*/

    if (dia === 4) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 5 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/5";
    }
    if (dia === 5) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 10 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/10";
    }
    if (dia === 6) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 30 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/30";
    }
    if (dia === 7) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 50 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/50";
    }
    if (dia === 8) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 100 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/100";
    }
    if (dia === 9) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 125 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/125";
    }
    if (dia === 10) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 180 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/180";
    }
  } else {
    document.getElementById("idRetornoCompraPocaoVida").innerHTML =
      "Compra não realizada, você não tem ouro suficiente ou sua vida está 100%";
  }
}
/*Fim da função comprar poção de Vida*/

/*início da função comprar poção de Mana*/
function funcaoComprarPocaoMana() {
  if (ouro > 9 && mana < AumentoDoNivelDaMana) {
    mana = mana + 5;
    ouro = ouro - 10;

    if (mana > AumentoDoNivelDaMana) {
      mana = AumentoDoNivelDaMana;
    }

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");

    document.getElementById("idRetornoCompraPocaoMana").innerHTML =
      "Mana restaurada";

       /*INICIO DO EFEITO DA MANA*/
       var bolhasContainer = document.getElementById("bolhas");
var direcoes = ["cima", "baixo", "esquerda", "direita"];
for (var i = 0; i < 20; i++) {
  var bolha = document.createElement("div");
  bolha.classList.add("bolha");
  bolha.style.left = document.getElementById("botao-bolhas").offsetLeft + document.getElementById("botao-bolhas").offsetWidth / 2 + Math.random() * 30 - 15 + "px";
  bolha.style.top = document.getElementById("botao-bolhas").offsetTop + document.getElementById("botao-bolhas").offsetHeight / 2 + "px";
  bolhasContainer.appendChild(bolha);
  var direcao = direcoes[Math.floor(Math.random() * direcoes.length)];
  bolha.classList.add("bolha-animacao-" + direcao);
  bolha.style.opacity = 1;
  setTimeout(function(bolha) {
    bolha.parentNode.removeChild(bolha);
  }, 3000, bolha);
}

         /*FIM DO EFEITO DA MANA*/
  } else {
    document.getElementById("idRetornoCompraPocaoMana").innerHTML =
      "Compra não realizada, você não tem ouro suficiente ou sua Mana está no limite";
  }
}
/*Fim da função comprar poção de Mana*/

/*início da função comprar ESPADA*/
function funcaoComprarEspada() {
  if (EspadaEquipada === 1) {
    document.getElementById("idRetornoCompraEspada").innerHTML =
      "Espada já equipada";
  } else if (ouro > 99 && EspadaEquipada === 0) {
    EspadaEquipada = 1;
    forca = forca + 15;
    ouro = ouro - 100;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    document.getElementById("idRetornoCompraEspada").innerHTML =
      "Espada comprada e equipada com sucesso";

    document.getElementById("idCheckCompraEspada").innerHTML = "✅ Espada";

    document.getElementById("idRetornoCompraEspadaComum3").innerHTML = "+ 15";
  } else {
    document.getElementById("idRetornoCompraEspada").innerHTML =
      "Ouro insuficiente";
  }
}

/*início da função comprar Escudo*/
function funcaoComprarEscudo() {
  if (EscudoEquipada === 1) {
    document.getElementById("idRetornoCompraEscudo").innerHTML =
      "Escudo já equipada";
  } else if (ouro > 114 && EscudoEquipada === 0) {
    EscudoEquipada = 1;
    ouro = ouro - 115;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idRetornoCompraEscudo").innerHTML =
      "Escudo comprado e equipado com sucesso";

    document.getElementById("idCheckCompraEscudo").innerHTML = "✅ Defesa Divina";

    agilidade = agilidade + 15;
    percepcao = percepcao + 5;
    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;

    document.getElementById("idRetornoEscudoNoStatus").innerHTML = "+ 15";
    document.getElementById("idRetornoEscudoNoStatus2").innerHTML = "+ 5";
  } else {
    document.getElementById("idRetornoCompraEscudo").innerHTML =
      "Ouro insuficiente";
  }
}
/*Fim da função comprar Escudo*/

/*início da função comprar ADAGA*/
function funcaoComprarEspadaComum() {
  if (EspadaSimplesEquipada === 1) {
    document.getElementById("idRetornoCompraEspadaComum").innerHTML =
      "Adaga já equipada";
  } else if (ouro > 49 && EspadaSimplesEquipada === 0) {
    EspadaSimplesEquipada = 1;
    forca = forca + 5;
    ouro = ouro - 50;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    document.getElementById("idRetornoCompraEspadaComum").innerHTML =
      "Adaga comprada e equipada com sucesso";

    document.getElementById("idCheckCompraAdaga").innerHTML = "✅ Adaga";

    document.getElementById("idRetornoCompraEspadaComum2").innerHTML = "+ 5";
  } else {
    document.getElementById("idRetornoCompraEspadaComum").innerHTML =
      "Ouro insuficiente";
  }
}


/*início da função Treino diário*/
function misaoDiaria() {

  if (TurnoDeLutaCentopeia === 1){
    document.getElementById("idtreino").innerHTML = "⛔ Você optou por realizar a Missão de Penalidade: Sobrevivência";
  }

  else if (fadiga > 99 && RecompensaDaMisaoDiaria === 0){
    document.getElementById("idtreino").innerHTML = "⚠️ Você está com a Fadiga no máximo";
  }

  else if (treino < 100 && RecompensaDaMisaoDiaria === 0 && fadiga < 100 && TurnoDeLutaCentopeia === 0) {
    SomaDaForca = forca - 8;
    treino = treino + SomaDaForca;

    fadiga = fadiga + 1;
    document.getElementById("idtreino").innerHTML =
      "⚠️ Treino: " + treino + "%";
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
    progresso.setAttribute("style", "width: " + fadiga + "%");

    if (treino > 99 && RecompensaDaMisaoDiaria === 0) {
      RecompensaDaMisaoDiaria = 1;
  
      treino = 100;
  
      document.getElementById("idtreino").innerHTML = "✅ Treino: 100% ";
  
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      progresso.setAttribute("style", "width: " + fadiga + "%");
  
  
      forca = forca + 1;
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      alert("Receba a recompensa pelo Treino Diário [1 Ponto de atributo Força]",);
  
      /* início da função subir de nível */

    SomaDoNivel = SomaDoNivel + 1;
    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML = "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /* Fim da função subir de nível */
      
    } 
  }  
}
/*Fim da função Treinamento de força*/

/*início da função Objetivo do dia(MISSÃO DIÁRIA)*/
function misaoDiariaReceberRecompensa() {

  /*Início apagar as mensagem de RETORNO*/
  document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
    "Você quer desafiar o Kandiaru?";
  document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
    "Você quer desafiar o Goblin?";
  document.getElementById("idRetornoMissaoDiaria").innerHTML = "";
  document.getElementById("idatributopercepcao").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoVida").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoMana").innerHTML = "";
  document.getElementById("idRetornoCompraEspadaComum").innerHTML = "";
  document.getElementById("idRetornoCompraEspada").innerHTML = "";
  document.getElementById("idvendercristal").innerHTML = "";
  document.getElementById("idvenderpedra").innerHTML = "";
  document.getElementById("idminerarcristal").innerHTML = "";
   document.getElementById("idTituloAlerta").innerHTML = "";
  /* Fim apagar as mensagem de RETORNO */

  if (dia === 1) {
    if (SomaDosCristais > 9 && RecompensaDiaria === 0) {
      RecompensaDiaria = 1;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      document.getElementById("idRetornoMissaoDiariaTreino").innerHTML =
        "Faça a Missão Diária, você pode escolher entre Ganho de Força ou Sobrevivencia";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

        document.getElementById("idAlertaNoMenuLoja").innerHTML =
        "⚠️ Loja";

      ouro = ouro + 3;
      document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

      dia = 2;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 70 Cristais de Mana minerados: " + SomaDosCristais + "/70";

      alert(
        "Receba as recompensas do dia 1 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa(3 moedas de ouro)]",
      );
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 1 incompleta";
    }
  }

  if (dia === 2) {
    if (SomaDosCristais > 69 && RecompensaDiaria === 1 && treino === 100) {
      RecompensaDiaria = 2;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 3;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 400 Cristais de Mana minerados: " + SomaDosCristais + "/400";

      alert(
        "Receba as recompensas do dia 2 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 20 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/20";

      RecompensaDaMisaoDiaria = 0;
      treino = 0;
      TurnoDeLutaCentopeia = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 2 incompleta";
    }
  }
  if (dia === 3) {
    if (
      SomaDosCristais > 399 &&
      RecompensaDiaria === 2 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 19
    ) {
      RecompensaDiaria = 3;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 4;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 700 Cristais de Mana minerados: " + SomaDosCristais + "/700";

      alert(
        "Receba as recompensas do dia 3 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 35 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/35";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 5 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/5";

      treino = 0;
      TurnoDeLutaCentopeia = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 3 incompleta";
    }
  }

  if (dia === 4) {
    if (
      SomaDaPocaoDeVida > 4 &&
      SomaDosCristais > 699 &&
      RecompensaDiaria === 3 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 34
    ) {
      RecompensaDiaria = 4;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 5;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 1500 Cristais de Mana minerados: " + SomaDosCristais + "/1500";

      alert(
        "Receba as recompensas do dia 4 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 70 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/70";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 10 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/10";

      treino = 0;
      TurnoDeLutaCentopeia = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 4 incompleta";
    }
  }

  if (dia === 5) {
    if (
      SomaDaPocaoDeVida > 9 &&
      SomaDosCristais > 1499 &&
      RecompensaDiaria === 4 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 69
    ) {
      RecompensaDiaria = 5;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 6;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 3500 Cristais de Mana minerados: " + SomaDosCristais + "/3500";

      SomaDaPedraDeEssenciaParaMissaDiaria =
        SomaDaPedraDeEssenciaParaMissaDiaria + Goblin;
      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 10 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/10";

      alert(
        "Receba as recompensas do dia 5 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 100 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/100";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 30 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/30";

      treino = 0;
      TurnoDeLutaCentopeia = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 5 incompleta";
    }
  }

  if (dia === 6) {
    if (
      SomaDaPocaoDeVida > 29 &&
      SomaDosCristais > 3499 &&
      RecompensaDiaria === 5 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 99 &&
      SomaDaPedraDeEssenciaParaMissaDiaria > 9
    ) {
      RecompensaDiaria = 6;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 6;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 7;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 5000 Cristais de Mana minerados: " + SomaDosCristais + "/5000";

      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML =
        "Ganhe 10 presas de Lycan: " + Lycan + "/10";

      alert(
        "Receba as recompensas do dia 6 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa contém 3 pontos de atributos]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 150 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/150";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 50 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/50";

      treino = 0;
      TurnoDeLutaCentopeia = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";

      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 11 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/11";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 6 incompleta";
    }
  }

  if (dia === 7) {
    if (
      SomaDaPocaoDeVida > 49 &&
      SomaDosCristais > 4999 &&
      RecompensaDiaria === 6 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 149 &&
      Lycan > 9 &&
      SomaDaPedraDeEssenciaParaMissaDiaria > 10
    ) {
      RecompensaDiaria = 7;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 8;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 7000 Cristais de Mana minerados: " + SomaDosCristais + "/7000";

      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML =
        "Ganhe 15 presas de Lycan: " + Lycan + "/15";

      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 12 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/12";

      alert(
        "Receba as recompensas do dia 7 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 200 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/200";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 100 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/100";

      treino = 0;
      TurnoDeLutaCentopeia = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 7 incompleta";
    }
  }

  if (dia === 8) {
    if (
      Lycan > 14 &&
      SomaDaPocaoDeVida > 99 &&
      SomaDosCristais > 6999 &&
      RecompensaDiaria === 7 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 199 &&
      SomaDaPedraDeEssenciaParaMissaDiaria > 11
    ) {
      RecompensaDiaria = 8;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 9;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/10000";

      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML = "";

      alert(
        "Receba as recompensas do dia 8 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 250 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/250";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 125 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/125";

      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML = "";

      treino = 0;
      TurnoDeLutaCentopeia = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 8 incompleta";
    }
  }

  if (dia === 9) {
    if (
      SomaDaPocaoDeVida > 124 &&
      SomaDosCristais > 9999 &&
      RecompensaDiaria === 8 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 249
    ) {
      RecompensaDiaria = 9;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 10;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 14.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/14000";


      alert(
        "Receba as recompensas do dia 9 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 350 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/350";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 180 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/180";

      treino = 0;
      TurnoDeLutaCentopeia = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 9 incompleta";
    }
  }
    if (dia === 10) {
    if (
      SomaDaPocaoDeVida > 179 &&
      SomaDosCristais > 13999 &&
      RecompensaDiaria === 9 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 349
    ) {
      RecompensaDiaria = 11;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "Você zerou a Missão Diária!!";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 11;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Todos os dias foram realizados";

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "";


      alert(
        "Receba as recompensas do dia 10 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "";

    document.getElementById("idRetornoMissaoDiariaTreino").innerHTML =
        "";

      document.getElementById("idtreino").innerHTML = "Você zerou a Missão Diária!!";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 10 incompleta";
    }
  }

}
/*fim da função Objetivo do dia(MISSÃO DIÁRIA)*/

/*Barra de vida e fadiga */
const progresso = document.querySelector(".barra div");

progresso.setAttribute("style", "width: " + fadiga + "%");

const progresso2 = document.querySelector(".barraVida div");

progresso2.setAttribute("style", "width: " + vida + "%");

const progresso3 = document.querySelector(".barraMana div");

progresso3.setAttribute("style", "width: " + mana + "%");

/* Barra de vida e fadiga */

/* INÍCIO DA LUTA GOBLIN */
function LutaContraGoblinBotao() {
  if (vida < 30 || fadiga > 70) {
    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "Vida ou Fadiga insuficiente";
  } 
  
  else if (vida > 0 && fadiga < 100 && Goblin > 9) {
    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "✨ Você derrotou todos os goblins ✨";
  } 
  
  else if (
    vida > 29 &&
    fadiga < 71 &&
    forca > 15 &&
    agilidade > 11 &&
    Goblin < 10
  ) {
    vida = vida - 30;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 30;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    Goblin = Goblin + 1;
    document.getElementById("idGoblin").innerHTML =
      "🚶‍♂️População: " + Goblin + "/10";

    PedraDeEssencia = PedraDeEssencia + 1;
    SomaPedraDeEssenciaGoblin = SomaPedraDeEssenciaGoblin + 1;
    document.getElementById("idPedrasDeEssenciaGoblin").innerHTML = "💎 Pedras de Essência: " + SomaPedraDeEssenciaGoblin;

    document.getElementById("idpedrainventario").innerHTML =  "⚠️ Pedras de Essência: " + PedraDeEssencia;

      document.getElementById("idAlertaNoMenuInventario").innerHTML = "⚠️ Inventário";

    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "✨ VITÓRIA ✨ Você derrotou um Goblin [Recompensas: 1 ponto de experiência - 4 pontos distribuidos em seus atributos - 1 Pedra de essência]";

    if (Goblin > 9) {
     
      alert("Parabéns você trocou de Título . Novo título: Exterminador de Goblins", );

        document.getElementById("idtitulo").innerHTML = "Novo Título disponível";
        document.getElementById("idTituloAlerta").innerHTML = "⚠️";
        document.getElementById("idCheckGoblins").innerHTML =   "⚠️ Título: Exterminador de Goblins";
        document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
        document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
        document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";
    }

    if (dia === 6){
    SomaDaPedraDeEssenciaParaMissaDiaria = SomaDaPedraDeEssenciaParaMissaDiaria + 1;
    document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
      "Ganhe 10 Pedras de essência: " +
      SomaDaPedraDeEssenciaParaMissaDiaria +
      "/10";
  }

  if (dia === 7){
    SomaDaPedraDeEssenciaParaMissaDiaria = SomaDaPedraDeEssenciaParaMissaDiaria + 1;
    document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
      "Ganhe 11 Pedras de essência: " +
      SomaDaPedraDeEssenciaParaMissaDiaria +
      "/11";
  }

    experienciaGoblin = experienciaGoblin + 1;
    experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 1;

    document.getElementById("idexperiencia").innerHTML =
      "🏆 Experiência: " + experienciaGoblin;
    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

    document.getElementById("idLutaContraGoblinBotao").innerHTML =
      "Lutar novamente";

    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /* início da função subir de nível */

    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /* Fim da função subir de nível */
  } else {
    vida = vida - 30;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 30;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

    document.getElementById("idLutaContraGoblinBotao").innerHTML =
      "Tentar novamente";
  }
}
/*FIM DA LUTA DO GOBILIN*/

/*INÍCIO DA LUTA DO Kandiaru*/
function LutaContraKandiaruBotao() {
  if (vida < 0 || fadiga > 99) {
    document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
      "Você está sem vida ou com a fadiga em 100%";
  } else if (vida > 0 && fadiga < 100 && Kandiaru === 2) {
    document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
      "✨ Você já sobreviveu  a Dangeon dupla ✨";
  } else if (
    vida > 0 &&
    fadiga < 100 &&
    agilidade > 9 &&
    Kandiaru === 1 &&
    inteligencia > 11
  ) {
    Kandiaru = 2;
    document.getElementById("idKandiaru").innerHTML = "⚔️ Rounds da batalha: 1/1";

    vida = vida - 100;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 100;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
      "✨ VITÓRIA ✨ Você sobreviveu ao Templo de Cartenon [Recompensas: Habilidade Saúde e longevidade -  4 pontos distribuidos em seus atributos]";

document.getElementById("idCheckSaudelongevidade").innerHTML =
      "⚠️ Habilidade: Saúde e longevidade";

      document.getElementById("idAlertaNoMenuHabilidade").innerHTML =
      "⚠️ Habilidades";
      
    document.getElementById("idLutaContraKandiaruBotao").innerHTML =
      "Dangeon fechada";


    

    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /*início da função subir de nível*/
    SomaDoNivel = SomaDoNivel + 5;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    vida = vida - 100;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 100;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

    document.getElementById("idLutaContraKandiaruBotao").innerHTML =
      "Tentar novamente";
  }
}
/*FIM DA LUTA DO Kandiaru*/

/*INÍCIO DO BOTÃO ANALISAR LUTA Kandiaru*/
function AnalisarLutaContraKandiaruBotao() {
  document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
    "Análise dos seus Status e da Estátua de Deus";

  document.getElementById("idLutaContraKandiaruBotao").innerHTML =
    "Seguir com a Luta";

  if (inteligencia < 12) {
    document.getElementById("idInteligenciaKandiaru").innerHTML =
      "🧠 Inteligência: 11/" + inteligencia + " ❌";
  }

  if (inteligencia > 11) {
    document.getElementById("idInteligenciaKandiaru").innerHTML =
      "🧠 Inteligência: 11/" + inteligencia + " ✅";
  }

  if (vida !== 100) {
    document.getElementById("idVidaKandiaru").innerHTML =
      "❤️ Vida: 100%/" + vida + "%" + " ❌";
  }

  if (vida === 100) {
    document.getElementById("idVidaKandiaru").innerHTML =
      "❤️ Vida: 100%/" + vida + "%" + " ✅";
  }

  if (fadiga !== 99) {
    document.getElementById("idFadigaKandiaru").innerHTML =
      "🪫Fadiga: 0%/" + fadiga + "%" + " ❌";
  }

  if (fadiga === 0) {
    document.getElementById("idFadigaKandiaru").innerHTML =
      "🪫Fadiga: 0%/" + fadiga + "%" + " ✅";
  }

  if (agilidade > 9) {
    document.getElementById("idAgilidadeKandiaru").innerHTML =
      "🦵 Agilidade: 9/" + agilidade + " ✅";
  }
  if (agilidade < 10) {
    document.getElementById("idAgilidadeKandiaru").innerHTML =
      "🦵 Agilidade: 9/" + agilidade + " ❌";
  }
}

/*FIM DO BOTÃO ANALISAR LUTA Kandiaru*/

/*INÍCIO DO BOTÃO ANALISAR LUTA GOBLIN*/
function AnalisarLutaContraGoblinBotao() {
  document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
    "Análise dos seus Status e do Goblin";

  document.getElementById("idLutaContraGoblinBotao").innerHTML =
    "Seguir com a Luta";

  if (vida < 30) {
    document.getElementById("idVidaGoblin").innerHTML =
      "❤️ Vida: 30%/" + vida + "%" + " ❌";
  }

  if (vida > 29) {
    document.getElementById("idVidaGoblin").innerHTML =
      "❤️ Vida: 30%/" + vida + "%" + " ✅";
  }

  if (fadiga > 70) {
    document.getElementById("idFadigaGoblin").innerHTML =
      "🪫Fadiga: 30%/" + fadiga + "%" + " ❌";
  }

  if (fadiga < 71) {
    document.getElementById("idFadigaGoblin").innerHTML =
      "🪫Fadiga: 30%/" + fadiga + "%" + " ✅";
  }

  if (agilidade < 12) {
    document.getElementById("idAgilidadeGoblin").innerHTML =
      "🦵 Agilidade: 11/" + agilidade + " ❌";
  }

  if (agilidade > 11) {
    document.getElementById("idAgilidadeGoblin").innerHTML =
      "🦵 Agilidade: 11/" + agilidade + " ✅";
  }

  if (forca > 15) {
    document.getElementById("idForcaGoblin").innerHTML =
      "💪 Força: 15/" + forca + " ✅";
  }

  if (forca < 16) {
    document.getElementById("idForcaGoblin").innerHTML =
      "💪 Força: 15/" + forca + " ❌";
  }
}

/*FIM DO BOTÃO ANALISAR LUTA GOBLIN*/

/*INÍCIO DA FUNÇÃO ATRIBUIR PONTOS NA AGILIDADE*/
function funcaoatribuiragilidade() {
  if (atributo > 0) {
    atributo = atributo - 1;

    document.getElementById("idatributopercepcao").innerHTML =
      "1 ponto de atributo adicionado";
    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

    agilidade = agilidade + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

    /*início da função subir de nível*/
    SomaDoNivel = SomaDoNivel + 1;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    document.getElementById("idatributopercepcao").innerHTML =
      "Você não possui nenhum Ponto de atributo disponível";
  }
}
/*FIM DA FUNÇÃO ATRIBUIR PONTOS NA AGILIDADE*/

/*INÍCIO DA FUNÇÃO ATRIBUIR PONTOS NA INTELIGÊNCIA*/
function funcaoatribuirinteligencia() {
  if (atributo > 0) {
    atributo = atributo - 1;

    document.getElementById("idatributopercepcao").innerHTML =
      "1 ponto de atributo adicionado";
    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

    inteligencia = inteligencia + 1;
    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /*início da função subir de nível*/
    SomaDoNivel = SomaDoNivel + 1;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    document.getElementById("idatributopercepcao").innerHTML =
      "Você não possui nenhum Ponto de atributo disponível";
  }
}


/* INÍCIO DA HABILIDADE SAÚDE E LONGEVIDADE */
function FuncaoSaudeElogenvidade() {
  
  document.getElementById("idCheckSaudelongevidade").innerHTML =
      "Habilidade: Saúde e longevidade";

      document.getElementById("idAlertaNoMenuHabilidade").innerHTML =
      "Habilidades";

  if (SaudeElogenvidadeNivel2 === 0){
  if (vida > 89 && vida < 100 && Kandiaru > 1 && mana > 0) {
    mana = mana - 1;
    if (mana < 1) {
      mana = 0;
    }
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");

    vida = 100;
    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você está com a vida no máximo";

  } else if (Kandiaru === 1) {
    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Habilidade será liberada ao derrotar o Kandiaru";
  } else {
    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Os requisitos desta habilidade não foram cumpridos";
  }
}



if (SaudeElogenvidadeNivel2 === 1){
  if (vida > 79 && vida < 100 && Kandiaru > 1 && mana > 0) {
    mana = mana - 1;
    if (mana < 1) {
      mana = 0;
    }
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
    "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
    progresso3.setAttribute("style", "width: " + mana + "%");

    vida = 100;
    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você está com a vida no máximo";

    document.getElementById("idCheckSaudelongevidade").innerHTML =
      "Habilidade: Saúde e longevidade";

      document.getElementById("idAlertaNoMenuHabilidade").innerHTML =
      "Habilidades";
  } else if (Kandiaru === 1) {
    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Habilidade será liberada ao derrotar o Kandiaru";
  } else {
    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Os requisitos desta habilidade não foram cumpridos";
  }
}


}

/*FIM DA HABILIDADE SAÚDE E LONGEVIDADE*/

/*INÍCIO DA HABILIDADE SUBIR O NÍVEL DA SAÚDE E LONGEVIDADE*/
function FuncaoSaudeElogenvidadeUplevel() {

if (SaudeElogenvidadeNivel2 === 0 && experienciaParaUsarNasHabilidades > 25){

SaudeElogenvidadeNivel2 = 1;
experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades - 25;

 document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

  document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você subiu o nível da habilidade";


document.getElementById("SaudeElogenvidadeUpleve").innerHTML = "Se a sua vida for maior ou igual a 80% gaste 1 ponto de Mana e ganhe 20% de vida";
} else if (SaudeElogenvidadeNivel2 === 0 && experienciaParaUsarNasHabilidades < 25){
  document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Experiência insuficiente";
}
else if (SaudeElogenvidadeNivel2 === 1 && experienciaParaUsarNasHabilidades ){
  document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você já evoluiu a Habilidade";
}

}
/*FIM DA HABILIDADE SUBIR O NÍVEL DA SAÚDE E LONGEVIDADE*/

/*INÍCIO DA LUTA DO LYCAN*/
function LutaContraLycanBotao() {
  if (vida < 30 || fadiga > 70) {
    document.getElementById("idQuadroDeRetornoLycan").innerHTML =
      "Vida ou Fadiga insuficiente";
  } else if (vida > 0 && fadiga < 100 && Lycan > 19) {
    document.getElementById("idQuadroDeRetornoLycan").innerHTML =
      "✨ Você derrotou todos os Lycan ✨";
  } else if (
    vida > 29 &&
    fadiga < 71 &&
    forca > 44 &&
    agilidade > 30 &&
    Lycan < 20
  ) {
    vida = vida - 30;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 30;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    Lycan = Lycan + 1;
    document.getElementById("idLycan").innerHTML =
      "🚶‍♂️População: " + Lycan + "/20";

    if (dia === 7) {
      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML =
        "Ganhe 10 presas de Lycan: " + Lycan + "/10";
    }

    if (dia === 8) {
      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML =
        "Ganhe 15 presas de Lycan: " + Lycan + "/15";
    }

    PresaDeLycan = PresaDeLycan + 1;
    SomaDaPresaDeLycan = SomaDaPresaDeLycan + 1;

    document.getElementById("idPresaDeLycan").innerHTML =
      "💰 Presas de Lycan: " + SomaDaPresaDeLycan;

    document.getElementById("idPresainventario").innerHTML = "⚠️ Presa de Lycan: " + PresaDeLycan;

    document.getElementById("idAlertaNoMenuInventario").innerHTML = "⚠️ Inventário";

    document.getElementById("idQuadroDeRetornoLycan").innerHTML =
      "✨ VITÓRIA ✨ Você derrotou um Lycan [Recompensas: 2 pontos de experiência - 4 pontos distribuidos em seus atributos - 1 Presa de Lycan]";

    if (Lycan > 19) {
     
      alert("Parabéns você trocou de Título. Novo título: Assassino de Lobos",);
     
      document.getElementById("idtitulo").innerHTML = "Novo Título disponível";
      document.getElementById("idTituloAlerta").innerHTML = "⚠️";
      document.getElementById("idCheckLobos").innerHTML =   "⚠️ Título: Assassino de Lobos";
      document.getElementById("idTituloRetornoLobos",).innerHTML = "";
      document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
      document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";
      document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
       
    }

    experienciaLican = experienciaLican + 2;
    experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 2;
    document.getElementById("idexperienciaLycan").innerHTML =
      "🏆 Experiência: " + experienciaLican;

    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

    document.getElementById("idLutaContraLycanBotao").innerHTML =
      "Lutar novamente";

    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /*início da função subir de nível*/

    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/

    /* Início de remover Arrancada*/
    if (Arrancada === 1) {
      Arrancada = 0;

      if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

      document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;

        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
    }
    /*Fim de remover Arrancada */

    /*Início de remover Intenção Assassina */
    if (Assassina === 1) {

      Assassina = 0;
      agilidade = agilidade - 5;

      document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
      document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
      document.getElementById("idRetornoAssassina").innerHTML = "";
      document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
    }
    /* Fim de remover Intenção Assassina */
  } else {
    vida = vida - 30;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 30;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoLycan").innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

    document.getElementById("idLutaContraLycanBotao").innerHTML =
      "Tentar novamente";
  }
}
/*FIM DA LUTA DO LYCAN*/

/*INÍCIO DO BOTÃO ANALISAR LUTA LYCAN*/
function AnalisarLutaContraLycanBotao() {
  document.getElementById("idQuadroDeRetornoLycan").innerHTML =
    "Análise dos seus Status e do Lycan";

  document.getElementById("idLutaContraLycanBotao").innerHTML =
    "Seguir com a Luta";

  if (vida < 30) {
    document.getElementById("idVidaLycan").innerHTML =
      "❤️ Vida: 30%/" + vida + "%" + " ❌";
  }

  if (vida > 29) {
    document.getElementById("idVidaLycan").innerHTML =
      "❤️ Vida: 30%/" + vida + "%" + " ✅";
  }

  if (fadiga > 70) {
    document.getElementById("idFadigaLycan").innerHTML =
      "🪫Fadiga: 30%/" + fadiga + "%" + " ❌";
  }

  if (fadiga < 71) {
    document.getElementById("idFadigaLycan").innerHTML =
      "🪫Fadiga: 30%/" + fadiga + "%" + " ✅";
  }

  if (agilidade < 31) {
    document.getElementById("idAgilidadeLycan").innerHTML =
      "🦵 Agilidade: 30/" + agilidade + " ❌";
  }

  if (agilidade > 30) {
    document.getElementById("idAgilidadeLycan").innerHTML =
      "🦵 Agilidade: 30/" + agilidade + " ✅";
  }

  if (forca > 44) {
    document.getElementById("idForcaLycan").innerHTML =
      "💪 Força: 44/" + forca + " ✅";
  }

  if (forca < 45) {
    document.getElementById("idForcaLycan").innerHTML =
      "💪 Força: 44/" + forca + " ❌";
  }
}

/* FIM DO BOTÃO ANALISAR LUTA LYCAN */

/* INÍCIO DA LUTA Kasaka */
function LutaContraKasakaBotao() {

  if (vida < 70 || fadiga > 30) {
    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "Vida ou Fadiga insuficiente";
  } 
  
  else if (vida > 0 && fadiga < 100 && Kasaka > 0) {
    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "✨ Você derrotou Kasaka o Chefe da Dangeon✨";
  } 
  
  else if (
    vida > 69 &&
    fadiga < 31 &&
    forca > 50 &&
    agilidade > 50 &&
    Kasaka < 2
  ) {
    vida = vida - 70;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 70;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    Kasaka = Kasaka + 1;
    document.getElementById("idKasaka").innerHTML =
      "🚶‍♂️População: " + Kasaka + "/1";

    PedraDeEssencia = PedraDeEssencia + 1;
    SomaPedraDeEssenciaKasaka = SomaPedraDeEssenciaKasaka + 1;

    document.getElementById("idPedrasDeEssenciaKasaka").innerHTML =
      "💎 Pedras de Essência: " + SomaPedraDeEssenciaKasaka;
    document.getElementById("idpedrainventario").innerHTML = "⚠️ Pedras de Essência: " + PedraDeEssencia;

      document.getElementById("idAlertaNoMenuInventario").innerHTML = "⚠️ Inventário";

    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "✨ VITÓRIA ✨ Você derrotou a Kasaka [Recompensas: 4 pontos de experiência - 4 pontos distribuidos em seus atributos - 1 Pedra de essência - Adaga Presa Venenosa de Kasaka - Habilidade: Arrancada]";

    document.getElementById("idCheckArrancada").innerHTML =
      "⚠️ Habilidade: Arrancada";

    document.getElementById("idItemPresaKasakaAdquirida").innerHTML =
      "⚠️ Presa Venenosa de Kasaka";

    SomaDaPedraDeEssenciaParaMissaDiaria =
      SomaDaPedraDeEssenciaParaMissaDiaria + 1;

      if (dia === 6) {
        document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
          "Ganhe 10 Pedras de essência: " +
          SomaDaPedraDeEssenciaParaMissaDiaria +
          "/10";}

    if (dia === 7) {
      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 11 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/11";
    }

    if (dia === 8) {
      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 12 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/12";
    }

    if (dia > 8) {
      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "";
    }

    experienciaKasaka = experienciaKasaka + 4;
    experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 4;
    document.getElementById("idexperienciaKasaka").innerHTML =
      "🏆 Experiência: " + experienciaKasaka;

    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

    document.getElementById("idLutaContraKasakaBotao").innerHTML =
      "Lutar novamente";

    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /* início da função subir de nível */

    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    vida = vida - 70;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 70;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

    document.getElementById("idLutaContraKasakaBotao").innerHTML =
      "Tentar novamente";
  }
}
/*FIM DA LUTA DO Kasaka*/

/*INÍCIO DO BOTÃO ANALISAR LUTA Kasaka */
function AnalisarLutaContraKasakaBotao() {
  document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
    "Análise dos seus Status e da Kasaka";

  document.getElementById("idLutaContraKasakaBotao").innerHTML =
    "Seguir com a Luta";

  if (vida < 70) {
    document.getElementById("idVidaKasaka").innerHTML =
      "❤️ Vida: 70%/" + vida + "%" + " ❌";
  }

  if (vida > 69) {
    document.getElementById("idVidaKasaka").innerHTML =
      "❤️ Vida: 70%/" + vida + "%" + " ✅";
  }

  if (fadiga > 30) {
    document.getElementById("idFadigaKasaka").innerHTML =
      "🪫Fadiga: 70%/" + fadiga + "%" + " ❌";
  }

  if (fadiga < 31) {
    document.getElementById("idFadigaKasaka").innerHTML =
      "🪫Fadiga: 70%/" + fadiga + "%" + " ✅";
  }

  if (agilidade < 51) {
    document.getElementById("idAgilidadeKasaka").innerHTML =
      "🦵 Agilidade: 50/" + agilidade + " ❌";
  }

  if (agilidade > 50) {
    document.getElementById("idAgilidadeKasaka").innerHTML =
      "🦵 Agilidade: 50/" + agilidade + " ✅";
  }

  if (forca > 50) {
    document.getElementById("idForcaKasaka").innerHTML =
      "💪 Força: 50/" + forca + " ✅";
  }

  if (forca < 51) {
    document.getElementById("idForcaKasaka").innerHTML =
      "💪 Força: 50/" + forca + " ❌";
  }
}

/*FIM DO BOTÃO ANALISAR LUTA Kasaka*/

  
  /*Início da função vender Presas de Lycan*/
  
  function funcaovenderpresa() {
    if (PresaDeLycan > 0) {
      PresaDeLycan = PresaDeLycan - 1;
  
      document.getElementById("idvenderpresa").innerHTML =
        "Venda realizada com sucesso";
  
      document.getElementById("idPresainventario").innerHTML =
        "Presa de Lycan: " + PresaDeLycan;
  
      ouro = ouro + 20;
  
      document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

      /*Início do efeito vender Presas de Lycan*/
      var moedas3 = document.getElementById("moedas3");
var direcoes = ["direita", "esquerda", "cima", "baixo"];
for (var i = 0; i < 5; i++) {
  var moeda3 = document.createElement("div");
  moeda3.classList.add("moeda3");
  moeda3.textContent = "$";
  moeda3.style.left = document.getElementById("botao-moeda3").offsetLeft + document.getElementById("botao-moeda3").offsetWidth / 2 + "px";
  moeda3.style.top = document.getElementById("botao-moeda3").offsetTop + document.getElementById("botao-moeda3").offsetHeight / 2 + "px";
  moedas3.appendChild(moeda3);
  var direcao = direcoes[Math.floor(Math.random() * direcoes.length)];
  moeda3.classList.add("moeda3-animacao");
  moeda3.style.animationName = "sair-moeda3-" + direcao;
  moeda3.style.opacity = 1;
  setTimeout(function(moeda3) {
    moeda3.parentNode.removeChild(moeda3);
  }, 2000, moeda3);
}
       /*Fim do efeito vender Presas de Lycan*/


    } else {
      document.getElementById("idvenderpresa").innerHTML =
        "Presa de Lycan insuficiente";
    }
  }
  
  /* INÍCIO VENDER CRISTAIS DE MANA*/
  function funcaovendercristal() {
    
    document.getElementById("idAlertaNoMenuInventario").innerHTML =
    "Inventário";

     /*Início da função vender cristais 100*/
  if (cristal > 99)
    if (cristal > 99) {

       /*INÍCIO DOS EFEITOS DE MOEDAS NA COMPRA $ 1*/
       var moedas = document.getElementById("moedas");
var direcoes = ["direita", "esquerda", "cima", "baixo"];
for (var i = 0; i < 5; i++) {
  var moeda = document.createElement("div");
  moeda.classList.add("moeda");
  moeda.textContent = "$";
  moeda.style.left = document.getElementById("botao-moeda").offsetLeft + document.getElementById("botao-moeda").offsetWidth / 2 + "px";
  moeda.style.top = document.getElementById("botao-moeda").offsetTop + document.getElementById("botao-moeda").offsetHeight / 2 + "px";
  moedas.appendChild(moeda);
  var direcao = direcoes[Math.floor(Math.random() * direcoes.length)];
  moeda.classList.add("moeda-animacao");
  moeda.style.animationName = "sair-moeda-" + direcao;
  moeda.style.opacity = 1;
  setTimeout(function(moeda) {
    moeda.parentNode.removeChild(moeda);
  }, 2000, moeda);
}      
 /*FIM DOS EFEITOS DE MOEDAS NA COMPRA $ 1*/

       document.getElementById("idvendercristal").innerHTML =
        "Venda realizada com sucesso";
  
      cristal = cristal - 100;
  
      document.getElementById("idcristal").innerHTML =
        "Cristais de Mana: " + cristal;
  
      document.getElementById("idcristalinventario").innerHTML =
        "Cristais de Mana: " + cristal;
  
      ouro = ouro + 10;
  
      document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

        

    } else {
      document.getElementById("idminerarcristal").innerHTML = "";
  
      document.getElementById("idatributopercepcao").innerHTML = "";
  
      document.getElementById("idvendercristal").innerHTML =
        "Cristais insuficiente";
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML =
        "Inventário";
    
  }
  
  /* Fim da função vender cristais 100*/
  
    /* Início da função vender cristais 10*/
    else {
    if (cristal > 9) {

 /*INÍCIO DOS EFEITOS DE MOEDAS NA COMPRA $ 1*/
       var moedas = document.getElementById("moedas");
var direcoes = ["direita", "esquerda", "cima", "baixo"];
for (var i = 0; i < 5; i++) {
  var moeda = document.createElement("div");
  moeda.classList.add("moeda");
  moeda.textContent = "$";
  moeda.style.left = document.getElementById("botao-moeda").offsetLeft + document.getElementById("botao-moeda").offsetWidth / 2 + "px";
  moeda.style.top = document.getElementById("botao-moeda").offsetTop + document.getElementById("botao-moeda").offsetHeight / 2 + "px";
  moedas.appendChild(moeda);
  var direcao = direcoes[Math.floor(Math.random() * direcoes.length)];
  moeda.classList.add("moeda-animacao");
  moeda.style.animationName = "sair-moeda-" + direcao;
  moeda.style.opacity = 1;
  setTimeout(function(moeda) {
    moeda.parentNode.removeChild(moeda);
  }, 2000, moeda);
}      
 /*FIM DOS EFEITOS DE MOEDAS NA COMPRA $ 1*/
     

      document.getElementById("idvendercristal").innerHTML =
        "Venda realizada com sucesso";
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML =
        "Inventário";
  
      cristal = cristal - 10;
  
      document.getElementById("idcristal").innerHTML =
        "Cristais de Mana: " + cristal;
  
      document.getElementById("idcristalinventario").innerHTML =
        "Cristais de Mana: " + cristal;
  
      ouro = ouro + 1;
  
      document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    } else {
      document.getElementById("idminerarcristal").innerHTML = "";
  
      document.getElementById("idatributopercepcao").innerHTML = "";
  
      document.getElementById("idvendercristal").innerHTML =
        "Cristais insuficiente";
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML =
        "Inventário";
    }
    }
    /* Fim da função vender cristais 10*/
  
  
  }
  
  /* FIM VENDER CRISTAIS DE MANA*/
  
  /*Início da função vender cristais 100*/
  
  function funcaovendercristal100() {
    if (cristal > 99) {


      document.getElementById("idvendercristal").innerHTML =
        "Venda realizada com sucesso";
  
      cristal = cristal - 100;
  
      document.getElementById("idcristal").innerHTML =
        "Cristais de Mana: " + cristal;
  
      document.getElementById("idcristalinventario").innerHTML =
        "Cristais de Mana: " + cristal;
  
      ouro = ouro + 10;
  
      document.getElementById("idouro").innerHTML = "Ouro: " + ouro;
    } else {
      document.getElementById("idminerarcristal").innerHTML = "";
  
      document.getElementById("idatributopercepcao").innerHTML = "";
  
      document.getElementById("idvendercristal").innerHTML =
        "Cristais insuficiente";
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML =
        "Inventário";
    }
  }
  
  /* Fim da função vender cristais 100*/
  
  /*Início da função vender Pedras de essência*/
  
  function funcaovenderpedra() {
  
    document.getElementById("idAlertaNoMenuInventario").innerHTML = "Inventário";
  
    if (PedraDeEssencia > 0) {
      PedraDeEssencia = PedraDeEssencia - 1;
  
      document.getElementById("idvenderpedra").innerHTML =
        "Venda realizada com sucesso";
  
      document.getElementById("idpedrainventario").innerHTML =
        "Pedra de Essência: " + PedraDeEssencia;
  
      ouro = ouro + 10;
  
      document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

       /*Início do efeito vender Pedras de essência*/
       var moedas2 = document.getElementById("moedas2");
var direcoes = ["direita", "esquerda", "cima", "baixo"];
for (var i = 0; i < 5; i++) {
  var moeda2 = document.createElement("div");
  moeda2.classList.add("moeda2");
  moeda2.textContent = "$";
  moeda2.style.left = document.getElementById("botao-moeda2").offsetLeft + document.getElementById("botao-moeda2").offsetWidth / 2 + "px";
  moeda2.style.top = document.getElementById("botao-moeda2").offsetTop + document.getElementById("botao-moeda2").offsetHeight / 2 + "px";
  moedas2.appendChild(moeda2);
  var direcao = direcoes[Math.floor(Math.random() * direcoes.length)];
  moeda2.classList.add("moeda2-animacao");
  moeda2.style.animationName = "sair-moeda2-" + direcao;
  moeda2.style.opacity = 1;
  setTimeout(function(moeda2) {
    moeda2.parentNode.removeChild(moeda2);
  }, 2000, moeda2);
}
       /*fim do efeito vender Pedras de essência*/


    } else {
      document.getElementById("idvenderpedra").innerHTML =
        "Pedra de Essência insuficiente";
    }
  }
  
  /* Fim da função vender Pedras de essência*/
  
  /*início da função equipar Kasaka*/
  
  function funcaoEquiparKasaka() {
    if (KasakaEquipada === 1) {
      document.getElementById("idRetornoEquiparKasaka").innerHTML =
        "Kasaka já equipada";
    } else if (Kasaka > 0 && KasakaEquipada === 0) {
      KasakaEquipada = 1;
  
      forca = forca + 25;
  
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
  
      document.getElementById("idRetornoEquiparKasaka").innerHTML =
        "Kasaka equipada com sucesso";
  
      document.getElementById("idItemPresaKasakaAdquirida").innerHTML =
        "✅ Presa Venenosa de Kasaka";
  
      document.getElementById("idRetornoCompraEspadaComum4").innerHTML = "+ 25";
    } else {
      document.getElementById("idRetornoEquiparKasaka").innerHTML =
        "Necessário derrotar a Kasaka para adquirir essa Adaga";
    }
  }
  
  /* Fim da função equipar Kasaka */
  
  /* início da função equipar Coleira do Guardião */
  
  function funcaoEquiparColeira() {
    if (ColeiraEquipada === 1) {
      document.getElementById("idRetornoEquiparColeira").innerHTML =
        "Colar já equipada";
    } else if (Cerberus > 0 && ColeiraEquipada === 0) {
      ColeiraEquipada = 1;
  
      agilidade = agilidade + 20;
      percepcao = percepcao + 20;
  
     document.getElementById(
      "idpercepcao").innerHTML =
     "👀 Percepção: " + percepcao;
  
       document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
      document.getElementById("idRetornoEquiparColeira").innerHTML =
        "Colar equipado com sucesso";
  
      document.getElementById("idItemColeiraAdquirida").innerHTML =
        "✅ Coleira do Guardião";

        document.getElementById("idAlertaNoMenuInventario").innerHTML =  "Inventário";
  
      document.getElementById("idRetornoColeira1").innerHTML = "+ 20";
        document.getElementById("idRetornoColeira2").innerHTML = "+ 20";
    } else {
      document.getElementById("idRetornoEquiparColeira").innerHTML =
        "Necessário derrotar o Cerberus Guardião do Inferno para adquirir esse Colar";
    }
  }
  
  /* Fim da função equipar Coleira do Guardião */
  
  /* início da função equipar Toque do Dominador*/
  
  function funcaoEquiparToqueDoDominador() {
    if (ToqueDoDominadorEquipada === 1) {
      document.getElementById("idRetornoEquiparToqueDoDominadorEquipada").innerHTML =
        "Habilidade já em uso";
    } 
    
    else if (Igris < 3 && ToqueDoDominadorEquipada === 0){
      document.getElementById("idRetornoEquiparToqueDoDominadorEquipada").innerHTML =
        "Necessário derrotar o Cavaleiro Comandante Igris o Vermelho-Sangue para adquirir essa Habilidade";
    }
    
    else if (Igris === 3 && ToqueDoDominadorEquipada === 0) {
      ToqueDoDominadorEquipada = 1;
  
      inteligencia = inteligencia + 10;
    document.getElementById(
      "idinteligencia").innerHTML ="🧠 Inteligência: " + inteligencia;

      document.getElementById("idRetornoToqueDoDominadorEquipada").innerHTML = "+ 10";
  
      document.getElementById("idRetornoEquiparToqueDoDominadorEquipada").innerHTML =
        "Habilidade em uso";
  
      document.getElementById("idItemToqueDoDominadorAdquirida").innerHTML =
        "✅ Toque do Dominador";

        document.getElementById("idAlertaNoMenuInventario").innerHTML =  "Inventário";
        
    } 
  }
  
  /* Fim da função equipar Toque do Dominador */

  /* início do Elixir da Vida */
  
  function FuncaoElixirDaVida() {

    if (Cerberus === 0) {
      document.getElementById("idRetornoElixirDaVida").innerHTML =
        "Necessário derrotar o Cerberus Guardião do Inferno para adquirir essa Habilidade";
    } 
    
    else if(Cerberus === 1 && ElixirDaVida === 0){
      document.getElementById("idRetornoElixirDaVida").innerHTML =
      "Ceberus derrotado [Necessário todos os ingredientes para criar o Elixir da Vida]";
      document.getElementById("idAlertaNoMenuHabilidade").innerHTML = "Habilidades";
    }

    else if(Cerberus === 1 && ElixirDaVida === 0 && FragmentoDaAvoreDaVida === 1 && AguaNascenteDaFlorestaEcoante === 1 && SanguePurificadoDoMonarcaDemoniaco === 1) {
      ElixirDaVida = 1;
  
  
      document.getElementById("idRetornoElixirDaVida").innerHTML =
        "Elixir da Vida criado com sucesso. Toque na imagem novamente quando quiser usar!";
  
        document.getElementById("idCheckElixirDaVida").innerHTML =
        "✅ Habilidade: Elixir da Vida";
  
    } else if(ElixirDaVida === 1) {
      ElixirDaVida = 2;

      vida = 100;
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = 0;
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

      mana = 100;
      if (mana > AumentoDoNivelDaMana) {
        mana = AumentoDoNivelDaMana;
      }
      document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");

      document.getElementById("idRetornoElixirDaVida").innerHTML =
        "Você usou o Elixir da Vida";
  
      document.getElementById("idCheckElixirDaVida").innerHTML =
        "⛔Habilidade: Elixir da Vida (Não pode mais ser usada)";
    }
  }
  
  /* Fim do Elixir da Vida */

  /* início da função comprar poção de recuperação */
  function funcaoComprarPocaoRecuperacao() {
  
    document.getElementById("idAlertaNoMenuLoja").innerHTML = "Loja";
  
    if (ouro > 0 && fadiga > 0) {
      fadiga = fadiga - 10;
      ouro = ouro - 1;
      SomaDaPocaoDeRecuperacao = SomaDaPocaoDeRecuperacao + 1;
  
      if (fadiga < 1) {
        fadiga = 0;
      }
      document.getElementById("idouro").innerHTML = "Ouro: " + ouro;
  
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      progresso.setAttribute("style", "width: " + fadiga + "%");
  
      document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML =
        "10% de recuperação aplicada em Fadiga";

  /*INÍCIO DO EFEITO DA FADIGA*/
  var setaContainer = document.getElementById("botao-seta-vermelha").parentNode;
    var seta = document.createElement("div");
    seta.classList.add("seta-vermelha");
    seta.textContent = "↓";
    seta.style.left = document.getElementById("botao-seta-vermelha").offsetLeft + document.getElementById("botao-seta-vermelha").offsetWidth / 2 - 25 + "px";
    seta.style.top = document.getElementById("botao-seta-vermelha").offsetTop - 25 + "px";
    setaContainer.appendChild(seta);
    seta.classList.add("seta-vermelha-animacao");
    seta.style.opacity = 1;
    setTimeout(function(seta) {
      seta.parentNode.removeChild(seta);
    }, 1000, seta);
            /*FIM DO EFEITO DA FADIGA*/

      if (dia === 3) {
        document.getElementById(
          "idRetornoMissaoDiariaPocaoDeRecuperacao",
        ).innerHTML =
          "Faça a compra de 20 Poções de recuperação na loja: " +
          SomaDaPocaoDeRecuperacao +
          "/20";
      }
  
      if (dia === 4) {
        document.getElementById(
          "idRetornoMissaoDiariaPocaoDeRecuperacao",
        ).innerHTML =
          "Faça a compra de 35 Poções de recuperação na loja: " +
          SomaDaPocaoDeRecuperacao +
          "/35";
      }
      if (dia === 5) {
        document.getElementById(
          "idRetornoMissaoDiariaPocaoDeRecuperacao",
        ).innerHTML =
          "Faça a compra de 70 Poções de recuperação na loja: " +
          SomaDaPocaoDeRecuperacao +
          "/70";
      }
      if (dia === 6) {
        document.getElementById(
          "idRetornoMissaoDiariaPocaoDeRecuperacao",
        ).innerHTML =
          "Faça a compra de 100 Poções de recuperação na loja: " +
          SomaDaPocaoDeRecuperacao +
          "/100";
      }
  
      if (dia === 7) {
        document.getElementById(
          "idRetornoMissaoDiariaPocaoDeRecuperacao",
        ).innerHTML =
          "Faça a compra de 150 Poções de recuperação na loja: " +
          SomaDaPocaoDeRecuperacao +
          "/150";
      }
      if (dia === 8) {
        document.getElementById(
          "idRetornoMissaoDiariaPocaoDeRecuperacao",
        ).innerHTML =
          "Faça a compra de 200 Poções de recuperação na loja: " +
          SomaDaPocaoDeRecuperacao +
          "/200";
      }
      if (dia === 9) {
        document.getElementById(
          "idRetornoMissaoDiariaPocaoDeRecuperacao",
        ).innerHTML =
          "Faça a compra de 250 Poções de recuperação na loja: " +
          SomaDaPocaoDeRecuperacao +
          "/250";
      }
      if (dia === 10) {
        document.getElementById(
          "idRetornoMissaoDiariaPocaoDeRecuperacao",
        ).innerHTML =
          "Faça a compra de 350 Poções de recuperação na loja: " +
          SomaDaPocaoDeRecuperacao +
          "/350";
      }
    } else {
      document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML =
        "Compra não realizada, você não tem ouro suficiente ou sua fadiga está zerada";
    }
  }
  /*Fim da função comprar poção de recuperação*/
  
  /*INÍCIO DA LUTA DO dos Insectoids*/
  function LutaContraInsectoidsBotao() {
    if (vida < 10 || fadiga > 80) {
      document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
        "Vida ou Fadiga insuficiente";
    } else if (vida > 0 && fadiga < 100 && Insectoids > 4) {
      document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
        "✨ Você derrotou todos os Insectoids ✨";
    } else if (
      vida > 9 &&
      fadiga < 81 &&
      forca > 70 &&
      agilidade > 50 &&
      Insectoids < 5 &&
      Kasaka === 1 &&
      percepcao > 45
    ) {
      vida = vida - 10;
      if (vida < 1) {
        vida = 0;
      }
  
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 20;
      if (fadiga > 99) {
        fadiga = 100;
      }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      Insectoids = Insectoids + 1;
      document.getElementById("idInsectoids").innerHTML =
        "🚶‍♂️População: " + Insectoids + "/5";
  
      document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
        "✨ VITÓRIA ✨ Você derrotou um Insectoids [Recompensas: 1 ponto de experiência - 1 pontos de atributos]";
  
      experienciaInsectoids = experienciaInsectoids + 1;
      experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 1;
      document.getElementById("idexperienciaInsectoids").innerHTML =
        "🏆 Experiência: " + experienciaInsectoids;
  
      document.getElementById(
        "idContarExperienciaNoQuadroHabilidades",
      ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;
  
      document.getElementById("idLutaContraInsectoidsBotao").innerHTML =
        "Lutar novamente";
  
      atributo = atributo + 1;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;
  
        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
          "⚠️ Atributos";
  
        /* Início de remover Arrancada*/
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
  Assassina = 0;
      agilidade = agilidade - 5;

      document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
      document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
      document.getElementById("idRetornoAssassina").innerHTML = "";
      document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Intenção Assassina*/
  
      /* início da função subir de nível */
  
      SomaDoNivel = SomaDoNivel + 5;
      if (SomaDoNivel > SomaDoIndicadorDoNivel) {
        document.getElementById("idnivel").innerHTML =
          "Nível: " + EqualizadoDoNivel;
  
        alert("Level Up");
  
        EqualizadoDoNivel = EqualizadoDoNivel + 1;
        SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
      }
      /* Fim da função subir de nível */
    } else {
      vida = vida - 10;
      if (vida < 1) {
        vida = 0;
      }
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 20;
      if (fadiga > 99) {
        fadiga = 100;
      }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
        "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
      document.getElementById("idLutaContraInsectoidsBotao").innerHTML =
        "Tentar novamente";
    }
  }
  /*FIM DA LUTA dos Insectoids*/
  
  /*INÍCIO DO BOTÃO ANALISAR LUTA Insectoids*/
  function AnalisarLutaContraInsectoidsBotao() {
    document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
      "Análise dos seus Status e do Insectoid";
  
    document.getElementById("idLutaContraInsectoidsBotao").innerHTML =
      "Seguir com a Luta";
  
    if (vida < 10) {
      document.getElementById("idVidaInsectoids").innerHTML =
        "❤️ Vida: 10%/" + vida + "%" + " ❌";
    }
  
    if (vida > 9) {
      document.getElementById("idVidaInsectoids").innerHTML =
        "❤️ Vida: 10%/" + vida + "%" + " ✅";
    }
  
    if (fadiga > 80) {
      document.getElementById("idFadigaInsectoids").innerHTML =
        "🪫Fadiga: 80%/" + fadiga + "%" + " ❌";
    }
  
    if (fadiga < 81) {
      document.getElementById("idFadigaInsectoids").innerHTML =
        "🪫Fadiga: 20%/" + fadiga + "%" + " ✅";
    }
  
    if (agilidade < 51) {
      document.getElementById("idAgilidadeInsectoids").innerHTML =
        "🦵 Agilidade: 50/" + agilidade + " ❌";
    }
  
    if (agilidade > 50) {
      document.getElementById("idAgilidadeInsectoids").innerHTML =
        "🦵 Agilidade: 50/" + agilidade + " ✅";
    }
  
    if (forca > 70) {
      document.getElementById("idForcaInsectoids").innerHTML =
        "💪 Força: 70/" + forca + " ✅";
    }
  
    if (forca < 71) {
      document.getElementById("idForcaInsectoids").innerHTML =
        "💪 Força: 70/" + forca + " ❌";
    }
  
    if (percepcao > 45) {
      document.getElementById("idPercepcaoInsectoids").innerHTML =
        "👀 Percepção: 45/" + percepcao + " ✅";
    }
  
    if (percepcao < 46) {
      document.getElementById("idPercepcaoInsectoids").innerHTML =
        "👀 Percepção: 45/" + percepcao + " ❌";
    }
  
    if (Kasaka === 0) {
      document.getElementById("idRequisitoInsectoids").innerHTML =
        "🐍 Kasaka derrotada: Não ❌";
    }
  
   if (Kasaka === 1) {
      document.getElementById("idRequisitoInsectoids").innerHTML =
        "🐍 Kasaka derrotada: Sim ✅";
    }
  
  }
  
  /* FIM DO BOTÃO ANALISAR LUTA dos Insectoids */
  
  /*INÍCIO DA LUTA Centopeias*/
  function LutaContraCentopeiasBotao() {

   
    if (vida < 50 || fadiga > 49 && TurnoDeLutaCentopeia === 0) {
      document.getElementById("idQuadroDeRetornoCentopeias").innerHTML =
        "Vida ou Fadiga insuficiente";
    } 

    else if (TurnoDeLutaCentopeia === 1){
      document.getElementById("idQuadroDeRetornoCentopeias").innerHTML =
        "Você já realizou a Missão de Penalidade: Sobrevivência";
    }
    
else if (vida > 49 && fadiga < 51 && forca > 50 && agilidade > 50 && TurnoDeLutaCentopeia === 0 && treino < 100 && Centopeias < 3) {
 
  document.getElementById("idAlertaNoMenuHabilidade").innerHTML =
    "⚠️ Habilidades";

      treino = 100;
      document.getElementById("idtreino").innerHTML = "⛔ Você optou por realizar a Missão de Penalidade: Sobrevivência ";

      TurnoDeLutaCentopeia = 1;

      vida = vida - 50; if (vida < 1) { vida = 0;}
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 50; if (fadiga > 99) { fadiga = 100; }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      Centopeias = Centopeias + 1;
      document.getElementById("idPopulacaoCentopeias").innerHTML =
        "🚶‍♂️População: " + Centopeias + "/3";

      experienciaCentopeias = experienciaCentopeias + 20;
      experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 20;
      document.getElementById("idexperienciaCentopeias").innerHTML = "🏆 Experiência: " + experienciaCentopeias;
      document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;
  
      document.getElementById("idLutaContraCentopeiasBotao").innerHTML = "Lutar novamente";

      document.getElementById("idQuadroDeRetornoCentopeias").innerHTML =
      "✨ VITÓRIA ✨ Você derrotou uma Centopeia [Recompensa: 20 pontos de experiência]";
      VitoriaContraAsCentopeias = 1;
        document.getElementById("idAlertaNoMenuHabilidade").innerHTML =
          "⚠️ Habilidade";
  
        /* Início de remover Arrancada*/
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
    Assassina = 0;
    agilidade = agilidade - 5;

    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
    document.getElementById("idRetornoAssassina").innerHTML = "";
    document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Intenção Assassina*/
  } 
    
    else if(vida > 49 && fadiga < 51 && forca < 51 &&  agilidade < 51 && TurnoDeLutaCentopeia === 0 && treino < 100){

      document.getElementById("idAlertaNoMenuHabilidade").innerHTML =
    "⚠️ Habilidades";

      treino = 100;
      document.getElementById("idtreino").innerHTML = "Você optou por realizar a Missão de Penalidade: Sobrevivência ";

      TurnoDeLutaCentopeia = 1;

      vida = vida - 50; if (vida < 1) {  vida = 0; }
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 50; if (fadiga > 99) { fadiga = 100;  }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      document.getElementById("idQuadroDeRetornoCentopeias").innerHTML =
        "☠️ DERROTA ☠️ - [Recompensa: 2 pontos de experiência]";
  
        experienciaCentopeias = experienciaCentopeias + 2;
        experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 2;
        document.getElementById("idexperienciaCentopeias").innerHTML = "🏆 Experiência: " + experienciaCentopeias;
        document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

      document.getElementById("idLutaContraInsectoidsBotao").innerHTML = "Tentar novamente";     
    }

    else if (TurnoDeLutaCentopeia === 0 && treino > 99){
      document.getElementById("idQuadroDeRetornoCentopeias").innerHTML =
        "⛔ Você optou por realizar o Treino Diário: Ganho de Força";
    }

    else if (Centopeias === 3){    
      document.getElementById("idQuadroDeRetornoCentopeias").innerHTML = "Você Já derrotou as 3 Centopeias ";   
    }


  }
  /*FIM DA LUTA Centopeia*/

  /*INÍCIO DO BOTÃO ANALISAR LUTA Centopeia*/
  function AnalisarLutaContraCentopeiasBotao() {

 
    document.getElementById("idQuadroDeRetornoCentopeias").innerHTML =
      "Análise dos seus Status e das Centopeias";
  
    document.getElementById("idLutaContraCentopeiasBotao").innerHTML =
      "Seguir com a Luta";
  
    if (vida < 50) {
      document.getElementById("idVidaCentopeias").innerHTML =
        "❤️ Vida: 50%/" + vida + "%" + " ❌";
    }
  
    if (vida > 49) {
      document.getElementById("idVidaCentopeias").innerHTML =
        "❤️ Vida: 50%/" + vida + "%" + " ✅";
    }
  
    if (fadiga > 50) {
      document.getElementById("idFadigaCentopeias").innerHTML =
        "🪫Fadiga: 50%/" + fadiga + "%" + " ❌";
    }
  
    if (fadiga < 51) {
      document.getElementById("idFadigaCentopeias").innerHTML =
        "🪫Fadiga: 50%/" + fadiga + "%" + " ✅";
    }
  
    if (agilidade < 51) {
      document.getElementById("idAgilidadeCentopeias").innerHTML =
        "🦵 Agilidade: 50/" + agilidade + " ❌";
    }
  
    if (agilidade > 50) {
      document.getElementById("idAgilidadeCentopeias").innerHTML =
        "🦵 Agilidade: 50/" + agilidade + " ✅";
    }
  
    if (forca > 50) {
      document.getElementById("idForcaCentopeias").innerHTML =
        "💪 Força: 50/" + forca + " ✅";
    }
  
    if (forca < 51) {
      document.getElementById("idForcaCentopeias").innerHTML =
        "💪 Força: 50/" + forca + " ❌";
    }


  }
  
  /* FIM DO BOTÃO ANALISAR LUTA Centopeia */

  /* INÍCIO DA LUTA da Aranha Gigante */
  function LutaContraAranhaBotao() {
   if (vida < 50 || fadiga > 40) {
    document.getElementById(
      "idQuadroDeRetornoAranha")
     .innerHTML =
     "Vida ou Fadiga insuficiente";
   } 
   
   else if (vida > 0 && fadiga <
    101 && Aranha > 0) {
    document.getElementById(
      "idQuadroDeRetornoAranha")
     .innerHTML =
     "✨ Você derrotou o chefe da dangeon ✨";
   } else if (
    vida > 49 &&
    fadiga < 41 &&
    forca > 85 &&
    agilidade > 70 &&
    Aranha < 1
   ) {
    vida = vida - 50;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 60;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
   Aranha = Aranha + 1;
    document.getElementById(
      "idAranha").innerHTML =
     "🚶‍♂️População: " + Aranha +
     "/1";
  
    PedraDeEssencia =
     PedraDeEssencia + 1;
    SomaPedraDeEssenciaAranha =
     SomaPedraDeEssenciaAranha + 1;
    document.getElementById(
      "idPedrasDeEssenciaAranha")
     .innerHTML =
     "💎 Pedras de Essência: " +
     SomaPedraDeEssenciaAranha;
    document.getElementById(
      "idpedrainventario").innerHTML =  "⚠️ Pedras de Essência: " +  PedraDeEssencia;
  
      document.getElementById("idAlertaNoMenuInventario").innerHTML = "⚠️ Inventário";

    document.getElementById(
      "idQuadroDeRetornoAranha")
     .innerHTML =
     "✨ VITÓRIA ✨ Você derrotou a Aranha Gigante [Recompensas: 1 ponto de experiência - 4 pontos distribuidos em seus atributos - 1 Pedra de essência]";
  
  
    SomaDaPedraDeEssenciaParaMissaDiaria
     =
     SomaDaPedraDeEssenciaParaMissaDiaria +
     1;
  
  
   if (dia === 7){
    document.getElementById(
      "idMissaoDiariaPedrasDeEssencia"
     ).innerHTML =
     "Ganhe 11 Pedras de essência: " +
     SomaDaPedraDeEssenciaParaMissaDiaria +
     "/11";
     }
  
   if (dia === 8){
    document.getElementById(
      "idMissaoDiariaPedrasDeEssencia"
     ).innerHTML =
     "Ganhe 12 Pedras de essência: " +
     SomaDaPedraDeEssenciaParaMissaDiaria +
     "/12";
     }
  
      if (dia > 8){
    document.getElementById(
      "idMissaoDiariaPedrasDeEssencia"
     ).innerHTML =
     "";
     }
  
    experienciaAranha =
     experienciaAranha + 1;
    experienciaParaUsarNasHabilidades
     =
     experienciaParaUsarNasHabilidades +
     1;
  
    document.getElementById(
      "idexperienciaAranha").innerHTML =
     "🏆 Experiência: " +
     experienciaAranha;
    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
     ).innerHTML =
     "Pontos de experiência: " +
     experienciaParaUsarNasHabilidades;
  
    document.getElementById(
      "idLutaContraAranhaBotao")
     .innerHTML =
     "Lutar novamente";
  
    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById(
      "idagilidade").innerHTML =
     "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca")
     .innerHTML = "💪 Força: " +
     forca;
    document.getElementById(
      "idpercepcao").innerHTML =
     "👀 Percepção: " + percepcao;
   
    document.getElementById(
      "idinteligencia").innerHTML =
     "🧠 Inteligência: " +
     inteligencia;
  
    /*início da função subir de nível 123456789*/
  
    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel >
     SomaDoIndicadorDoNivel) {
     document.getElementById(
       "idnivel").innerHTML =
      "Nível: " + EqualizadoDoNivel;
  
     alert("Level Up");
  
     EqualizadoDoNivel =
      EqualizadoDoNivel + 1;
     SomaDoIndicadorDoNivel =
      SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  
     /* Início de remover Arrancada*/
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Arrancada*/
  
   } else {
    vida = vida - 50;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 60;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
    document.getElementById(
      "idQuadroDeRetornoAranha")
     .innerHTML =
     "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
    document.getElementById(
      "idLutaContraAranhaBotao")
     .innerHTML =
     "Tentar novamente";
   }
  }
  /*FIM DA LUTA da Aranha Gigante*/
  
  /*INÍCIO DO BOTÃO ANALISAR LUTA da Aranha*/
  function AnalisarLutaContraAranhaBotao() {
   document.getElementById(
     "idQuadroDeRetornoAranha")
    .innerHTML =
    "Análise dos seus Status e da Aranha Gigante";
  
   document.getElementById(
     "idLutaContraAranhaBotao")
    .innerHTML =
    "Seguir com a Luta";
  
   if (vida < 49) {
    document.getElementById(
      "idVidaAranha").innerHTML =
     "❤️ Vida: 50%/" + vida +
     "%" + " ❌";
   }
  
   if (vida > 50) {
    document.getElementById(
      "idVidaAranha").innerHTML =
     "❤️ Vida: 50%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 60) {
    document.getElementById(
      "idFadigaAranha").innerHTML =
     "🪫Fadiga: 60%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga < 41) {
    document.getElementById(
      "idFadigaAranha").innerHTML =
     "🪫Fadiga : 60%/" + fadiga + "%" + " ✅";
   }
  
   if (agilidade < 71) {
    document.getElementById(
      "idAgilidadeAranha").innerHTML =
     "🦵 Agilidade: 70/" +  agilidade + " ❌";
   }
  
   if (agilidade > 70) {
    document.getElementById(
      "idAgilidadeAranha").innerHTML =
     "🦵 Agilidade: 70/" + agilidade + " ✅";
   }
  
   if (forca > 85) {
    document.getElementById(
      "idForcaAranha").innerHTML =
     "💪 Força: 85/" +  forca + " ✅";
   }
  
   if (forca < 86) {
    document.getElementById(
      "idForcaAranha").innerHTML =
     "💪 Força: 85/" +   forca + " ❌";
   }
  }
  
  /* FIM DO BOTÃO ANALISAR LUTA da Aranha Gigante */
  
  /*INÍCIO DA LUTA dos Caçadores*/
  function LutaContraCacadoresBotao() {
   if (vida < 5 || fadiga > 95) {
    document.getElementById(
      "idQuadroDeRetornoCacadores")
     .innerHTML =
     "Vida ou Fadiga insuficiente";
   } else if (vida > 0 && fadiga <
    100 && Cacadores > 5) {
    document.getElementById(
      "idQuadroDeRetornoCacadores")
     .innerHTML =
     "✨ Você derrotou todos os Caçadores ✨";
   } else if (
    vida > 4 &&
    fadiga < 96 &&
    forca > 90 &&
    agilidade > 90 &&
    Cacadores < 6 &&
    inteligencia > 35 &&
    percepcao > 50
   ) {
    vida = vida - 5;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 5;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
   Cacadores = Cacadores + 1;
    document.getElementById(
      "idCacadores").innerHTML =
     "🚶‍♂️População: " + Cacadores +
     "/6";
  
  
    document.getElementById(
      "idQuadroDeRetornoCacadores")
     .innerHTML =
     "✨ VITÓRIA ✨ Você derrotou um Caçador [Recompensas: 1 ponto de experiência - 4 pontos distribuidos em seus atributos - Habilidade Intenção Assassina]";
  
  
   document.getElementById("idCheckAssassina").innerHTML =
        "⚠️ Habilidade: Intenção Assassina";
  
  /* Início de remover Arrancada */
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Arrancada*/
  
    experienciaCacadores =
     experienciaCacadores + 1;
    experienciaParaUsarNasHabilidades
     =
     experienciaParaUsarNasHabilidades +
     1;
  
    document.getElementById(
      "idexperienciaCacadores").innerHTML =
     "🏆 Experiência: " +
     experienciaCacadores;
    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
     ).innerHTML =
     "Pontos de experiência: " +
     experienciaParaUsarNasHabilidades;
  
    document.getElementById(
      "idLutaContraCacadoresBotao")
     .innerHTML =
     "Lutar novamente";
  
    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
  
    inteligencia = inteligencia + 1;
    document.getElementById(
      "idagilidade").innerHTML =
     "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca")
     .innerHTML = "💪 Força: " +
     forca;
    document.getElementById(
      "idpercepcao").innerHTML =
     "👀 Percepção: " + percepcao;
  
    document.getElementById(
      "idinteligencia").innerHTML =
     "🧠 Inteligência: " +
     inteligencia;
  
    /*início da função subir de nível*/
  
    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel >
     SomaDoIndicadorDoNivel) {
     document.getElementById(
       "idnivel").innerHTML =
      "Nível: " + EqualizadoDoNivel;
  
     alert("Level Up");
  
     EqualizadoDoNivel =
      EqualizadoDoNivel + 1;
     SomaDoIndicadorDoNivel =
      SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  
    /* Início de remover Arrancada */
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
    Assassina = 0;
    agilidade = agilidade - 5;

    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
    document.getElementById("idRetornoAssassina").innerHTML = "";
    document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Intenção Assassina */
  
   } else {
    vida = vida - 5;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 5;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
    document.getElementById(
      "idQuadroDeRetornoCacadores")
     .innerHTML =
     "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
    document.getElementById(
      "idLutaContraCacadoresBotao")
     .innerHTML =
     "Tentar novamente";
   }
  }
  /* FIM DA LUTA dos Cacadores */
  
  /* INÍCIO DO BOTÃO ANALISAR LUTA dos Cacadores */
  function AnalisarLutaContraCacadoresBotao() {
   document.getElementById(
     "idQuadroDeRetornoCacadores")
    .innerHTML =
    "Análise dos seus Status e do Caçadores";
  
   document.getElementById(
     "idLutaContraCacadoresBotao")
    .innerHTML =
    "Seguir com a Luta";
  
   if (vida < 5) {
    document.getElementById(
      "idVidaCacadores").innerHTML =
     "❤️ Vida: 5%/" + vida + "%" + " ❌";
   }
  
   if (vida > 4) {
    document.getElementById(
      "idVidaCacadores").innerHTML =
     "❤️ Vida: 5%/" + vida + "%" + " ✅";
   }
  
   if (fadiga > 96) {
    document.getElementById(
      "idFadigaCacadores").innerHTML =
     "🪫Fadiga: 5%/" + fadiga + "%" + " ❌";
   }
  
   if (fadiga < 94) {
    document.getElementById(
      "idFadigaCacadores").innerHTML =
     "🪫Fadiga: 5%/" +  fadiga + "%" + " ✅";
   }
  
   if (agilidade < 91) {
    document.getElementById(
      "idAgilidadeCacadores").innerHTML =
     "🦵 Agilidade: 90/" + agilidade + " ❌";
   }
  
   if (agilidade > 90) {
    document.getElementById(
      "idAgilidadeCacadores").innerHTML =
     "🦵 Agilidade: 90/" + forca + " ✅";
   }
  
   if (forca > 90) {
    document.getElementById(
      "idForcaCacadores").innerHTML =
     "💪 Força: 90/" + forca + " ✅";
   }
  
   if (forca < 91) {
    document.getElementById(
      "idForcaCacadores").innerHTML =
     "💪 Força: 90/" + forca + " ❌";
   }
  
   if (inteligencia < 36) {
    document.getElementById(
      "idInteligenciaCacadores").innerHTML =
     "🧠 Inteligência: 35/" + inteligencia + " ❌";
   }
   if (inteligencia > 35) {
    document.getElementById(
      "idInteligenciaCacadores").innerHTML =
     "🧠 Inteligência: 35/" + inteligencia + " ✅";
   }
  
    if (percepcao < 51) {
    document.getElementById(
      "idPercepcaoCacadores").innerHTML =
     "👀 Percepção: 50/" +  percepcao + " ❌";
   }
   if (percepcao > 50) {
    document.getElementById(
      "idPercepcaoCacadores").innerHTML =
     "👀 Percepção: 50/" + percepcao + " ✅";
   }
  }
  
  /*FIM DO BOTÃO ANALISAR LUTA dos Cacadores*/
  
  
  /* Início da habilidade Intenção Assassina*/
  function FuncaoAssassina() {
    if (Cacadores === 0) {
      document.getElementById("idRetornoAssassina").innerHTML =
        "Habilidade será desbloqueada ao derrotar o Grupo de Caçadores";
    }
  
    if (Cacadores > 0 && Assassina === 1) {
      document.getElementById("idRetornoAssassina").innerHTML =
        "Buff já aplicado";
    }
  
    if (Cacadores > 0 && Assassina === 0 && mana > 3) {
      Assassina = 1;
      agilidade = agilidade + 5;
  
      document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
      document.getElementById("idRetornoAssassinaNoStatus").innerHTML = " + 5";
  
      document.getElementById("idCheckAssassina").innerHTML =
        "✅ Habilidade: Intenção Assassina";
  
      mana = mana - 4;
      document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");
  
      document.getElementById("idRetornoAssassina").innerHTML = "Buff aplicado";
    }
  
    if (Cacadores > 0 && Assassina === 0 && mana < 4) {
      document.getElementById("idRetornoAssassina").innerHTML =
        "Mana insuficiente";
    }
  }
  /*Fim da habilidade Intenção Assassina*/
  
  
  /* INÍCIO DA LUTA do Cerberus Guardião do Inferno */
  function LutaContraCerberusBotao() {

    if (TituloAssassinoDeLobosEstaEmUso === 0){
   if (vida < 100 || fadiga > 0) {
    document.getElementById(
      "idQuadroDeRetornoCerberus")
     .innerHTML =
     "Vida ou Fadiga insuficiente";
   } 
   
   else if (vida > 0 && fadiga < 100 && Cerberus > 0) {
    document.getElementById(
      "idQuadroDeRetornoCerberus")
     .innerHTML =
     "✨ Você já derrotou o Cerberus ✨";
   } 
   
   else if ( vida === 100 && fadiga === 0 && forca > 140 && agilidade > 110 && Cerberus === 0 && percepcao > 90 ) {
    vida = vida - 100;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 100;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
  Cerberus = 1;
    document.getElementById("idCerberus").innerHTML = "🚶‍♂️População: " + Cerberus +  "/1";
  
  
    document.getElementById( "idQuadroDeRetornoCerberus")  .innerHTML =
     "✨ VITÓRIA ✨ Você derrotou o Cerbero [Recompensas: 1 ponto de experiência - 4 pontos distribuidos em seus atributos - 1 Pedra de essência - Coleira do Guardião - Habilidade: Elixir da Vida]";
  
  document.getElementById("idItemColeiraAdquirida").innerHTML = "⚠️ Coleira do Guardião";
  document.getElementById("idCheckElixirDaVida").innerHTML = "⚠️ Habilidade: Elixir da Vida";
  document.getElementById("idAlertaNoMenuHabilidade").innerHTML = "⚠️ Habilidades";
  document.getElementById("idAlertaNoMenuInventario").innerHTML =  "⚠️ Inventário";
  
  
  
    experienciaCerberus =
     experienciaCerberus + 1;
    experienciaParaUsarNasHabilidades
     =
     experienciaParaUsarNasHabilidades +
     1;
  
    document.getElementById(
      "idexperienciaCerberus").innerHTML =
     "🏆 Experiência: " +
     experienciaCerberus;
    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
     ).innerHTML =
     "Pontos de experiência: " +
     experienciaParaUsarNasHabilidades;
  
    document.getElementById(
      "idLutaContraCerberusBotao")
     .innerHTML =
     "Cerberus derrotado";
  
    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
   
    inteligencia = inteligencia + 1;
    document.getElementById(
      "idagilidade").innerHTML =
     "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca")
     .innerHTML = "💪 Força: " +
     forca;
    document.getElementById(
      "idpercepcao").innerHTML =
     "👀 Percepção: " + percepcao;
    
    document.getElementById(
      "idinteligencia").innerHTML =
     "🧠 Inteligência: " +
     inteligencia;
  
    /* início da função subir de nível */
  
    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel >
     SomaDoIndicadorDoNivel) {
     document.getElementById(
       "idnivel").innerHTML =
      "Nível: " + EqualizadoDoNivel;
  
     alert("Level Up");
  
     EqualizadoDoNivel =
      EqualizadoDoNivel + 1;
     SomaDoIndicadorDoNivel =
      SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  
    /* Início de remover Arrancada */
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;
  
  document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
  document.getElementById("idRetornoArrancada").innerHTML = "";
  document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
    Assassina = 0;
    agilidade = agilidade - 5;

    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
    document.getElementById("idRetornoAssassina").innerHTML = "";
    document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Intenção Assassina */
  
   } else {
    vida = vida - 100;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 100;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
    document.getElementById(
      "idQuadroDeRetornoCerberus")
     .innerHTML =
     "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
    document.getElementById(
      "idLutaContraCerberusBotao")
     .innerHTML =
     "Tentar novamente";
   }
  }


  if (TituloAssassinoDeLobosEstaEmUso === 1){

agilidade = agilidade + 40;
forca = forca + 40;
percepcao = percepcao + 40;

    if (vida < 100 || fadiga > 0) {
     document.getElementById(
       "idQuadroDeRetornoCerberus")
      .innerHTML =
      "Vida ou Fadiga insuficiente";
    } else if (vida > 0 && fadiga <
     100 && Cerberus > 0) {
     document.getElementById(
       "idQuadroDeRetornoCerberus")
      .innerHTML =
      "✨ Você já derrotou o Cerberus ✨";
    } else if ( vida === 100 && fadiga === 0 && forca > 140 && agilidade > 110 && Cerberus === 0 && percepcao > 90 ) {
     vida = vida - 100;
     if (vida < 1) {
      vida = 0;
     }
   
     progresso2.setAttribute("style",
      "width: " + vida + "%");
     document.getElementById("idvida")
      .innerHTML = "❤️ Vida: " + vida +
      "%";
   
     fadiga = fadiga + 100;
     if (fadiga > 99) {
      fadiga = 100;
     }
     progresso.setAttribute("style",
      "width: " + fadiga + "%");
     document.getElementById(
       "idfadiga").innerHTML =
      "🪫Fadiga: " + fadiga + "%";
   
   Cerberus = Cerberus + 1;
     document.getElementById(
       "idCerberus").innerHTML =
      "🚶‍♂️População: " + Cerberus +
      "/1";
   
   
     document.getElementById(
       "idQuadroDeRetornoCerberus")
      .innerHTML =
      "✨ VITÓRIA ✨ Você derrotou o Cerbero [Recompensas: 1 ponto de experiência - 4 pontos distribuidos em seus atributos - 1 Pedra de essência - Coleira do Guardião - Habilidade: Elixir da Vida]";
   
   document.getElementById("idItemColeiraAdquirida").innerHTML = "⚠️ Coleira do Guardião";
   document.getElementById("idCheckElixirDaVida").innerHTML = "⚠️ Habilidade: Elixir da Vida";
   document.getElementById("idAlertaNoMenuHabilidade").innerHTML = "⚠️ Habilidades";
   document.getElementById("idAlertaNoMenuInventario").innerHTML =  "⚠️ Inventário";
   
   
   
     experienciaCerberus =
      experienciaCerberus + 1;
     experienciaParaUsarNasHabilidades
      =
      experienciaParaUsarNasHabilidades +
      1;
   
     document.getElementById(
       "idexperienciaCerberus").innerHTML =
      "🏆 Experiência: " +
      experienciaCerberus;
     document.getElementById(
       "idContarExperienciaNoQuadroHabilidades",
      ).innerHTML =
      "Pontos de experiência: " +
      experienciaParaUsarNasHabilidades;
   
     document.getElementById(
       "idLutaContraCerberusBotao")
      .innerHTML =
      "Cerberus derrotado";
   
     agilidade = agilidade + 1;
     forca = forca + 1;
     percepcao = percepcao + 1;
    
     inteligencia = inteligencia + 1;
     document.getElementById(
       "idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;
     document.getElementById("idforca")
      .innerHTML = "💪 Força: " +
      forca;
     document.getElementById(
       "idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;
     
     document.getElementById(
       "idinteligencia").innerHTML =
      "🧠 Inteligência: " +
      inteligencia;
   
     /* início da função subir de nível */
   
     SomaDoNivel = SomaDoNivel + 5;
     if (SomaDoNivel >
      SomaDoIndicadorDoNivel) {
      document.getElementById(
        "idnivel").innerHTML =
       "Nível: " + EqualizadoDoNivel;
   
      alert("Level Up");
   
      EqualizadoDoNivel =
       EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel =
       SomaDoIndicadorDoNivel + 6;
     }
     /*Fim da função subir de nível*/
   
     /* Início de remover Arrancada */
   if (Arrancada === 1){
   
   Arrancada = 0;
   
   if (ArrancadaNivel2 === 0){
   agilidade = agilidade - 10;
   }
   if (ArrancadaNivel2 === 1){
   agilidade = agilidade - 20;
   }
   
    document.getElementById("idagilidade").innerHTML =
         "🦵 Agilidade: " + agilidade;
   
         document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
         document.getElementById("idRetornoArrancada").innerHTML = "";
         document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
   
   }
   /*Fim de remover Arrancada*/
   
   /* Início de remover Intenção Assassina */
   if (Assassina === 1){
   
    Assassina = 0;
      agilidade = agilidade - 5;

      document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
      document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
      document.getElementById("idRetornoAssassina").innerHTML = "";
      document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
   
   }
   /* Fim de remover Intenção Assassina */
   
    } else {
     vida = vida - 100;
     if (vida < 1) {
      vida = 0;
     }
   
     progresso2.setAttribute("style",
      "width: " + vida + "%");
     document.getElementById("idvida")
      .innerHTML = "❤️ Vida: " + vida +
      "%";
   
     fadiga = fadiga + 100;
     if (fadiga > 99) {
      fadiga = 100;
     }
     progresso.setAttribute("style",
      "width: " + fadiga + "%");
     document.getElementById(
       "idfadiga").innerHTML =
      "🪫Fadiga: " + fadiga + "%";
   
     document.getElementById(
       "idQuadroDeRetornoCerberus")
      .innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
   
     document.getElementById(
       "idLutaContraCerberusBotao")
      .innerHTML =
      "Tentar novamente";
    }
agilidade = agilidade - 40;
forca = forca - 40;
percepcao = percepcao - 40;
   }

  }
  /* FIM DA LUTA do Cerberus Guardião do Inferno */
  
  /* INÍCIO DO BOTÃO ANALISAR LUTA do Cerberus Guardião do Inferno */
  function AnalisarLutaContraCerberusBotao() {

    if(TituloAssassinoDeLobosEstaEmUso === 0){
   document.getElementById(
     "idQuadroDeRetornoCerberus")
    .innerHTML =
    "Análise dos seus Status e do Cerberus";
  
   document.getElementById(
     "idLutaContraCerberusBotao")
    .innerHTML =
    "Seguir com a Luta";
  
   if (vida < 100) {
    document.getElementById(
      "idVidaCerberus").innerHTML =
     "❤️ Vida: 100%/" + vida +
     "%" + " ❌";
   }
  
   if (vida === 100) {
    document.getElementById(
      "idVidaCerberus").innerHTML =
     "❤️ Vida: 100%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 0) {
    document.getElementById(
      "idFadigaCerberus").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga === 0) {
    document.getElementById(
      "idFadigaCerberus").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ✅";
   }
  
   if (agilidade < 111) {
    document.getElementById(
      "idAgilidadeCerberus").innerHTML =
     "🦵 Agilidade: 110/" + agilidade + " ❌";
   }
  
   if (agilidade > 110) {
    document.getElementById(
      "idAgilidadeCerberus").innerHTML =
     "🦵 Agilidade: 110/" + agilidade + " ✅";
   }
  
   if (forca > 140) {
    document.getElementById(
      "idForcaCerberus").innerHTML =
     "💪 Força: 140/" + forca + " ✅";
   }
  
   if (forca < 141) {
    document.getElementById(
      "idForcaCerberus").innerHTML =
     "💪 Força: 140/" +  forca + " ❌";
   }
  
  
  
    if (percepcao < 91) {
    document.getElementById(
      "idPercepcaoCerberus").innerHTML =
     "👀 Percepção: 90/" + percepcao + " ❌";
   }
   if (percepcao > 90) {
    document.getElementById(
      "idPercepcaoCerberus").innerHTML =
     "👀 Percepção: 90/" + percepcao + " ✅";
   }
    }


    if(TituloAssassinoDeLobosEstaEmUso === 1){

agilidade = agilidade + 40;
forca = forca + 40;
percepcao = percepcao + 40;

      document.getElementById(
        "idQuadroDeRetornoCerberus")
       .innerHTML =
       "Análise dos seus Status e do Cerberus";
     
      document.getElementById(
        "idLutaContraCerberusBotao")
       .innerHTML =
       "Seguir com a Luta";
     
      if (vida < 100) {
       document.getElementById(
         "idVidaCerberus").innerHTML =
        "❤️ Vida: 100%/" + vida +
        "%" + " ❌";
      }
     
      if (vida === 100) {
       document.getElementById(
         "idVidaCerberus").innerHTML =
        "❤️ Vida: 100%/" + vida +
        "%" + " ✅";
      }
     
      if (fadiga > 0) {
       document.getElementById(
         "idFadigaCerberus").innerHTML =
        "🪫Fadiga: 100%/" +
        fadiga + "%" + " ❌";
      }
     
      if (fadiga === 0) {
       document.getElementById(
         "idFadigaCerberus").innerHTML =
        "🪫Fadiga: 100%/" +
        fadiga + "%" + " ✅";
      }
     
      if (agilidade < 76) {
       document.getElementById(
         "idAgilidadeCerberus").innerHTML =
        "🦵 Agilidade: 75/" + agilidade + " ❌";
      }
     
      if (agilidade > 75) {
       document.getElementById(
         "idAgilidadeCerberus").innerHTML =
        "🦵 Agilidade: 75/" + agilidade + " ✅";
      }
     
      if (forca > 90) {
       document.getElementById(
         "idForcaCerberus").innerHTML =
        "💪 Força: 90/" + forca + " ✅";
      }
     
      if (forca < 91) {
       document.getElementById(
         "idForcaCerberus").innerHTML =
        "💪 Força: 90/" +  forca + " ❌";
      }
     
     
     
       if (percepcao < 51) {
       document.getElementById(
         "idPercepcaoCerberus").innerHTML =
        "👀 Percepção: 50/" + percepcao + " ❌";
      }
      if (percepcao > 50) {
       document.getElementById(
         "idPercepcaoCerberus").innerHTML =
        "👀 Percepção: 50/" + percepcao + " ✅";
      }

agilidade = agilidade - 40;
forca = forca - 40;
percepcao = percepcao - 40;
       }
  }
  
  /*FIM DO BOTÃO ANALISAR LUTA do Cerberus Guardião do Inferno*/
  
  
  /* INÍCIO DA LUTA DO MR. KANG */
  function LutaContraKangBotao() {
   if (vida < 50 || fadiga > 70) {
    document.getElementById(
      "idQuadroDeRetornoKang")
     .innerHTML =
     "Vida ou Fadiga insuficiente";
   } 
   
   else if (vida > 0 && fadiga <
    100 && Kang > 0) {
    document.getElementById(
      "idQuadroDeRetornoKang")
     .innerHTML =
     "✨ Você já derrotou o Mr. Kang ✨";
   } else if (
    vida > 49 &&
    fadiga < 71 &&
    forca > 95 &&
    agilidade > 85 &&
    Kang === 0 &&
    percepcao > 80 &&
    Cerberus === 1
   ) {
    vida = vida - 50;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 30;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
  Kang = 1;
    document.getElementById(
      "idKang").innerHTML =
     "🚶‍♂️População: " + Kang +
     "/1";
  
  
    document.getElementById(
      "idQuadroDeRetornoKang")
     .innerHTML =
     "✨ VITÓRIA ✨ Você derrotou o Mr. Kang [Recompensas: 1 ponto de experiência - 4 pontos distribuidos em seus atributos - Habilidade: Furtividade]";
  
   document.getElementById(
      "idCheckFurtividade")
     .innerHTML =
     "⚠️ Habilidade: Furtividade";
  
    experienciaKang =
     experienciaKang + 1;
    experienciaParaUsarNasHabilidades
     =
     experienciaParaUsarNasHabilidades +
     1;
  
    document.getElementById(
      "idexperienciaKang").innerHTML =
     "🏆 Experiência: " +
     experienciaKang;
    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
     ).innerHTML =
     "Pontos de experiência: " +
     experienciaParaUsarNasHabilidades;
  
    document.getElementById(
      "idLutaContraKangBotao")
     .innerHTML =
     "Mr. Kang derrotado";
  
    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById(
      "idagilidade").innerHTML =
     "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca")
     .innerHTML = "💪 Força: " +
     forca;
    document.getElementById(
      "idpercepcao").innerHTML =
     "👀 Percepção: " + percepcao;
    
    document.getElementById(
      "idinteligencia").innerHTML =
     "🧠 Inteligência: " +
     inteligencia;
  
    /* início da função subir de nível */
  
    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel >
     SomaDoIndicadorDoNivel) {
     document.getElementById(
       "idnivel").innerHTML =
      "Nível: " + EqualizadoDoNivel;
  
     alert("Level Up");
  
     EqualizadoDoNivel =
      EqualizadoDoNivel + 1;
     SomaDoIndicadorDoNivel =
      SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  
    /* Início de remover Arrancada */
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
    Assassina = 0;
    agilidade = agilidade - 5;

    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
    document.getElementById("idRetornoAssassina").innerHTML = "";
    document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Intenção Assassina */
  
   } else {
    vida = vida - 50;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 30;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
    document.getElementById(
      "idQuadroDeRetornoKang")
     .innerHTML =
     "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
    document.getElementById(
      "idLutaContraKangBotao")
     .innerHTML =
     "Tentar novamente";
   }
  }
  /* FIM DA LUTA DO MR. KANG */
  
  /* INÍCIO DO BOTÃO ANALISAR  DA LUTA DO MR. KANG */
  function AnalisarLutaContraKangBotao() {
   document.getElementById(
     "idQuadroDeRetornoKang")
    .innerHTML =
    "Análise dos seus Status e do Mr. Kang";
  
   document.getElementById(
     "idLutaContraKangBotao")
    .innerHTML =
    "Seguir com a Luta";
  
   if (vida < 50) {
    document.getElementById(
      "idVidaKang").innerHTML =
     "❤️ Vida: 50%/" + vida +
     "%" + " ❌";
   }
  
   if (vida > 49) {
    document.getElementById(
      "idVidaKang").innerHTML =
     "❤️ Vida: 50%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 70) {
    document.getElementById("idFadigaKang").innerHTML = "🪫Fadiga: 30%/" +  fadiga + "%" + " ❌";
   }
  
   if (fadiga < 71 ) {
    document.getElementById("idFadigaKang").innerHTML = "🪫Fadiga: 30%/" +  fadiga + "%" + " ✅";
   }
  
   if (agilidade < 86) {
    document.getElementById(
      "idAgilidadeKang").innerHTML =
     "🦵 Agilidade: 85/" + agilidade + " ❌";
   }
  
   if (agilidade > 85) {
    document.getElementById(
      "idAgilidadeKang").innerHTML =
     "🦵 Agilidade: 85/" + agilidade + " ✅";
   }
  
   if (forca > 95) {
    document.getElementById(
      "idForcaKang").innerHTML =
     "💪 Força: 95/" +
     forca + " ✅";
   }
  
   if (forca < 96) {
    document.getElementById(
      "idForcaKang").innerHTML =
     "💪 Força: 95/" +
     forca + " ❌";
   }
  
  
  
    if (percepcao < 81) {
    document.getElementById(
      "idPercepcaoKang").innerHTML =
     "👀 Percepção: 80/" +
     percepcao + " ❌";
   }
   if (percepcao > 80) {
    document.getElementById(
      "idPercepcaoKang").innerHTML =
     "👀 Percepção: 80/" +
     percepcao + " ✅";
   }
  
    if (Cerberus === 0) {
    document.getElementById(
      "idDerrotouOCerberus").innerHTML =
     "🔥Cerberus derrotado: Não ❌";
   }
   if (Cerberus === 1) {
    document.getElementById(
      "idDerrotouOCerberus").innerHTML =
     "🔥Cerberus derrotado: Sim ✅";
   }
  
  }
  
  /*FIM DO BOTÃO ANALISAR DA LUTA DO MR. KANG*/
  
  /*Início da habilidade Furtividade*/
  function FuncaoFurtividade() {
    if (Kang === 0) {
      document.getElementById("idRetornoFurtividade").innerHTML =
        "Habilidade será desbloqueada ao derrotar o Mr. Kang";
    }
  
  if (Furtividade === 1) {
      document.getElementById("idRetornoFurtividade").innerHTML =
        "Buff já aplicado";
    }
  
    if (Kang === 1 && Furtividade === 0 && mana > 14) {
      Furtividade = 1;
      agilidade = agilidade + 30;
  
      document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
      document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = " + 30";
  
      document.getElementById("idCheckFurtividade").innerHTML =
        "✅ Habilidade: Furtividade";
  
      mana = mana - 15;
      document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");

      document.getElementById("idRetornoFurtividade").innerHTML = "Buff aplicado";
    }
  
    
  
    if (Kang === 1 && Furtividade === 0 && mana < 15) {
      document.getElementById("idRetornoFurtividade").innerHTML =
        "Mana insuficiente";
    }
  
   
  }
  /* Fim da habilidade Furtividade */

  /*Início da habilidade Provocar*/
  function FuncaoProvocar() {
  
  if (Provocar === 1) {
      document.getElementById("idRetornoProvocar").innerHTML =
        "Buff já aplicado";
    }
  
    if (Provocar === 0 && mana > 29) {
      Provocar = 1;
      
  
  agilidade = agilidade + 40;
    percepcao = percepcao + 10;
    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  
      document.getElementById("idRetornoProvocarNoStatus").innerHTML = " + 40";
      document.getElementById("idRetornoProvocarNoStatus2").innerHTML = " + 10";
  
      document.getElementById("idCheckProvocar").innerHTML =
        "✅ Habilidade: Provocar";
  
      mana = mana - 30;
      document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");

      document.getElementById("idRetornoProvocar").innerHTML = "Buff aplicado";
    }
  
    if (Provocar === 0 && mana < 30) {
      document.getElementById("idRetornoProvocar").innerHTML =
        "Mana insuficiente";
    }
  
   
  }
  /* Fim da habilidade Provocar */

  /*Início da habilidade Fortalecimento*/
  function FuncaoFortalecimento() {
  
    if (Fortalecimento === 1) {
        document.getElementById("idRetornoFortalecimento").innerHTML =
          "Buff já aplicado";
      }
    
      if (Fortalecimento === 0 && mana > 29) {
        Fortalecimento = 1;
        
    
        agilidade = agilidade + 10;
        forca = forca + 10;
        percepcao = percepcao + 10;
        inteligencia = inteligencia + 10;
        document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
    
        document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = " + 10";
        document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = " + 10";
        document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = " + 10";
        document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = " + 10";
    
        document.getElementById("idCheckFortalecimento").innerHTML =
          "✅ Habilidade: Fortalecimento";
    
        mana = mana - 30;
        document.getElementById("idAumentoDoNivelDaMana").innerHTML =
        "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
        progresso3.setAttribute("style", "width: " + mana + "%");
  
        document.getElementById("idRetornoFortalecimento").innerHTML = "Buff aplicado";
      }
    
      if (Fortalecimento === 0 && mana < 30) {
        document.getElementById("idRetornoFortalecimento").innerHTML =
          "Mana insuficiente";
      }
    
     
    }
    /* Fim da habilidade Fortalecimento */
  
  /* INÍCIO DO BOTÃO ANALISAR LUTA DO Igris */
  function AnalisarLutaContraIgrisBotao() {
   document.getElementById(
     "idQuadroDeRetornoIgris")
    .innerHTML =
    "Análise dos seus Status e do Igris";
  
   document.getElementById(
     "idLutaContraIgrisBotao")
    .innerHTML =
    "Seguir com a Luta";
  
   if (vida < 101) {
    document.getElementById(
      "idVidaIgris").innerHTML =
     "❤️ Vida: 100%/" + vida +
     "%" + " ❌";
   }
  
   if (vida === 100) {
    document.getElementById(
      "idVidaIgris").innerHTML =
     "❤️ Vida: 100%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 0) {
    document.getElementById(
      "idFadigaIgris").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga === 0) {
    document.getElementById(
      "idFadigaIgris").innerHTML =
     "🪫Fadiga : 100%/" +
     fadiga + "%" + " ✅";
   }
  
   if (agilidade < 121) {
    document.getElementById(
      "idAgilidadeIgris").innerHTML =
     "🦵 Agilidade: 120/" +
     agilidade + " ❌";
   }
  
   if (agilidade > 120) {
    document.getElementById(
      "idAgilidadeIgris").innerHTML =
     "🦵 Agilidade: 120/" +
     agilidade + " ✅";
   }
  
   if (forca > 100) {
    document.getElementById(
      "idForcaIgris").innerHTML =
     "💪 Força: 100/" +
     forca + " ✅";
   }
  
   if (forca < 101) {
    document.getElementById(
      "idForcaIgris").innerHTML =
     "💪 Força: 100/" +
     forca + " ❌";
   }
  
    if (percepcao < 81) {
    document.getElementById(
      "idPercepcaoIgris").innerHTML =
     "👀 Percepção: 80/" +
     percepcao + " ❌";
   }
   if (percepcao > 80) {
    document.getElementById(
      "idPercepcaoIgris").innerHTML =
     "👀 Percepção: 80/" +
     percepcao + " ✅";
   }
  
   if (inteligencia < 61) {
    document.getElementById(
      "idInteligenciaIgris").innerHTML =
     "🧠 Inteligência: 60/" +
     inteligencia + " ❌";
   }
   if (inteligencia > 60) {
    document.getElementById(
      "idInteligenciaIgris").innerHTML =
     "🧠 Inteligência: 60/" +
     inteligencia + " ✅";
   }
  
  }
  
  /*FIM DO BOTÃO ANALISAR DA LUTA DO Igris*/
  
  /* INÍCIO DA LUTA DO Igris */
  function LutaContraIgrisBotao() {
   if (vida < 100 || fadiga > 0) {
    document.getElementById(
      "idQuadroDeRetornoIgris")
     .innerHTML =
     "Vida ou Fadiga insuficiente";
   } else if (vida > 0 && fadiga <
    100 && Igris === 3) {
    document.getElementById(
      "idQuadroDeRetornoIgris")
     .innerHTML =
     "✨ Você já derrotou o Igris ✨";
   } else if (
    vida === 100 &&
    fadiga === 0 &&
    forca > 100 &&
    agilidade > 120 &&
    Igris < 4 &&
    percepcao > 80 &&
    inteligencia > 60
   ) {
    vida = vida - 100;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 100;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
  Igris = Igris + 1;
    document.getElementById(
      "idIgris").innerHTML =
     "⚔️ Rounds da batalha: " + Igris +
     "/3";
  
  
    document.getElementById(
      "idQuadroDeRetornoIgris")
     .innerHTML =
     "✨ VITÓRIA ✨";
  
  
  
  /* Início de remover Furtividade */
  if (Furtividade === 1){
  
    Furtividade = 0;
    
    agilidade = agilidade - 30;
    
     document.getElementById("idagilidade").innerHTML =
          "🦵 Agilidade: " + agilidade;
    
    document.getElementById("idCheckFurtividade").innerHTML = "Habilidade: Furtividade";
    document.getElementById("idRetornoFurtividade").innerHTML = "";
    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";
    
    }
    /*Fim de remover Furtividade*/

   /* Início de remover Provocar */
   if (Provocar === 1){
  
    Provocar = 0;
    
    document.getElementById("idCheckProvocar").innerHTML =
          "Habilidade: Provocar";
    
          agilidade = agilidade - 40;
          percepcao = percepcao - 10;
          document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
          document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        
            document.getElementById("idRetornoProvocarNoStatus").innerHTML = "";
            document.getElementById("idRetornoProvocarNoStatus2").innerHTML = "";    
    }
    /*Fim de remover Provocar*/  

    /* Início de remover Fortalecimento */
   if (Fortalecimento === 1){
  
    Fortalecimento = 0;
    
    agilidade = agilidade - 10;
        forca = forca - 10;
        percepcao = percepcao - 10;
        inteligencia = inteligencia - 10;
        document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
    
        document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = "";
    
        document.getElementById("idCheckFortalecimento").innerHTML =
          "Habilidade: Fortalecimento";   
    }
    /*Fim de remover Fortalecimento*/ 
  
    /* Início de remover Arrancada */
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
    Assassina = 0;
    agilidade = agilidade - 5;

    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
    document.getElementById("idRetornoAssassina").innerHTML = "";
    document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Intenção Assassina*/
  
  if(Igris === 3){
     document.getElementById(
      "idQuadroDeRetornoIgris")
     .innerHTML =
     "✨ VITÓRIA ✨ Você derrotou o Igris [Recompensas: Elmo do Cavaleiro Carmesim - Assassina de Cavaleiros disponível para compra - Novo título: Aquele que Superou a Adversidade - Habilidade: Toque do Dominador]";
  
     document.getElementById("idItemAssassinaCavaleirosAdquirida").innerHTML = "⚠️ Assassina de Cavaleiros";
  
        document.getElementById("idItemElmoAdquirida").innerHTML =  "⚠️ Elmo do Cavaleiro Carmesim";

        document.getElementById("idItemToqueDoDominadorAdquirida").innerHTML =  "⚠️ Toque do Dominador";
        
        document.getElementById("idtitulo").innerHTML = "Novo Título disponível";

        document.getElementById("idTituloAlerta").innerHTML =   "⚠️";

        document.getElementById("idCheckAdversidade").innerHTML = "⚠️ Título: Aquele que Superou a Adversidade";
      document.getElementById("idCheckEntusiasta").innerHTML = "";
      document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
      document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
      document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";
  
  
        
  
          alert(
          "Parabéns você trocou de Título. Novo título: Aquele que Superou a Adversidade",
        );
  
  }
  
  
   
  
    document.getElementById(
      "idLutaContraIgrisBotao")
     .innerHTML =
     "Igris derrotado";
  
    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById(
      "idagilidade").innerHTML =
     "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca")
     .innerHTML = "💪 Força: " +
     forca;
    document.getElementById(
      "idpercepcao").innerHTML =
     "👀 Percepção: " + percepcao;
    
    document.getElementById(
      "idinteligencia").innerHTML =
     "🧠 Inteligência: " +
     inteligencia;
  
    /* início da função subir de nível */
  
    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel >
     SomaDoIndicadorDoNivel) {
     document.getElementById(
       "idnivel").innerHTML =
      "Nível: " + EqualizadoDoNivel;
  
     alert("Level Up");
  
     EqualizadoDoNivel =
      EqualizadoDoNivel + 1;
     SomaDoIndicadorDoNivel =
      SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  
    /* Início de remover Arrancada */
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
    Assassina = 0;
    agilidade = agilidade - 5;

    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
    document.getElementById("idRetornoAssassina").innerHTML = "";
    document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Intenção Assassina */
  
   } else {
    vida = vida - 100;
    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 100;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
    document.getElementById(
      "idQuadroDeRetornoIgris")
     .innerHTML =
     "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
    document.getElementById(
      "idLutaContraIgrisBotao")
     .innerHTML =
     "Tentar novamente";
   }
  }
  /* FIM DA LUTA DO Igris */
  
  /* INÍCIO DO BOTÃO ANALISAR LUTA DO Yoo Jin-Ho*/
  function AnalisarLutaContraYooBotao() {

   document.getElementById(
     "idQuadroDeRetornoYoo")
    .innerHTML =
    "Análise dos seus Status e dos monstros";
  
   document.getElementById(
     "idLutaContraYooBotao")
    .innerHTML =
    "Seguir com a Luta";
  
   if (vida < 50) {
    document.getElementById(
      "idVidaYoo").innerHTML =
     "❤️ Vida: 50%/" + vida +
     "%" + " ❌";
   }
  
   if (vida > 49) {
    document.getElementById(
      "idVidaYoo").innerHTML =
     "❤️ Vida: 50%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 50) {
    document.getElementById(
      "idFadigaYoo").innerHTML =
     "🪫Fadiga: 50%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga < 51) {
    document.getElementById(
      "idFadigaYoo").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ✅";
   }
  
   if (agilidade < 201) {
    document.getElementById(
      "idAgilidadeYoo").innerHTML =
     "🦵 Agilidade: 200/" +
     agilidade + " ❌";
   }
  
   if (agilidade > 200) {
    document.getElementById(
      "idAgilidadeYoo").innerHTML =
     "🦵 Agilidade: 200/" +
     agilidade + " ✅";
   }
  
   if (forca > 150) {
    document.getElementById(
      "idForcaYoo").innerHTML =
     "💪 Força: 150/" +
     forca + " ✅";
   }
  
   if (forca < 151) {
    document.getElementById(
      "idForcaYoo").innerHTML =
     "💪 Força: 150/" +
     forca + " ❌";
   }
  
    if (percepcao < 126) {
    document.getElementById(
      "idPercepcaoYoo").innerHTML =
     "👀 Percepção: 125/" +
     percepcao + " ❌";
   }
   if (percepcao > 125) {
    document.getElementById(
      "idPercepcaoYoo").innerHTML =
     "👀 Percepção: 125/" +
     percepcao + " ✅";
   }
  
   if (TituloExterminadorDeGoblinsEstaEmUso === 1){
    document.getElementById(
      "idQuadroDeRetornoYoo")
     .innerHTML =
     "Análise dos seus Status e dos monstros [+ 50 Pontos do Título: Exterminador de Goblins]";
   
    document.getElementById(
      "idLutaContraYooBotao")
     .innerHTML =
     "Seguir com a Luta";
   
    if (vida < 50) {
     document.getElementById(
       "idVidaYoo").innerHTML =
      "❤️ Vida: 50%/" + vida +
      "%" + " ❌";
    }
   
    if (vida > 49) {
     document.getElementById(
       "idVidaYoo").innerHTML =
      "❤️ Vida: 50%/" + vida +
      "%" + " ✅";
    }
   
    if (fadiga > 50) {
     document.getElementById(
       "idFadigaYoo").innerHTML =
      "🪫Fadiga: 50%/" +
      fadiga + "%" + " ❌";
    }
   
    if (fadiga < 51) {
     document.getElementById(
       "idFadigaYoo").innerHTML =
      "🪫Fadiga: 100%/" +
      fadiga + "%" + " ✅";
    }
   

    agilidade = agilidade + 50;
    if (agilidade < 86) {
     document.getElementById(
       "idAgilidadeYoo").innerHTML =
      "🦵 Agilidade: 85/" +
      agilidade + " ❌";
    }
   if (agilidade >85) {
     document.getElementById(
       "idAgilidadeYoo").innerHTML =
      "🦵 Agilidade: 85/" +
      agilidade + " ✅";
    }
    agilidade = agilidade - 50;

   forca = forca + 50;
    if (forca > 95) {
     document.getElementById(
       "idForcaYoo").innerHTML =
      "💪 Força: 95/" +
      forca + " ✅";
    }
    if (forca < 96) {
     document.getElementById(
       "idForcaYoo").innerHTML =
      "💪 Força: 95/" +
      forca + " ❌";
    }
    forca = forca - 50;
   
    percepcao = percepcao + 50;
     if (percepcao < 66) {
     document.getElementById(
       "idPercepcaoYoo").innerHTML =
      "👀 Percepção: 65/" +
      percepcao + " ❌";
    }
    if (percepcao > 65) {
     document.getElementById(
       "idPercepcaoYoo").innerHTML =
      "👀 Percepção: 65/" +
      percepcao + " ✅";
    }
    percepcao = percepcao - 50;
   }
  }
  
  /*FIM DO BOTÃO ANALISAR  LUTA DO Yoo Jin-Ho*/
  
  /* INÍCIO DA LUTA DO Yoo Jin-Ho */
  function LutaContraYooBotao() {

    if (TituloExterminadorDeGoblinsEstaEmUso === 0){
   if (vida < 50 || fadiga > 50) {
    document.getElementById(
      "idQuadroDeRetornoYoo")
     .innerHTML =
     "Vida ou Fadiga insuficiente";
   }  
   
   
   else if (vida > 49 && fadiga < 51 && forca > 150 && agilidade > 200 && percepcao > 125) {

    vida = vida - 50;
    if (vida < 1) {vida = 0;}
    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
    fadiga = fadiga + 50;
    if (fadiga > 99) { fadiga = 100; }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
  Yoo = Yoo + 1;
    document.getElementById("idYoo").innerHTML = "🚶‍♂️População: " + Yoo + "/?";
  
  
    document.getElementById("idQuadroDeRetornoYoo") .innerHTML = "✨ VITÓRIA ✨ Você derrotou um Mostro [Recompensas: 1 ponto de experiência - 2 pontos de atributos para distribuir onde quiser]";
  
  
    experienciaYoo = experienciaYoo + 1;
    experienciaParaUsarNasHabilidades  =  experienciaParaUsarNasHabilidades +  1;
  
    document.getElementById("idexperienciaYoo").innerHTML =  "🏆 Experiência: " + experienciaYoo;
    document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " +  experienciaParaUsarNasHabilidades;
  
    document.getElementById( "idLutaContraYooBotao")
     .innerHTML = "Mostro derrotado";
  
  atributo = atributo + 2;
  
      document.getElementById("idatributo").innerHTML =  "Disponíveis: " + atributo;
  
        document.getElementById("idAlertaNoMenuAtributos").innerHTML = "⚠️ Atributos";
    
    /* Início de remover Furtividade */
  if (Furtividade === 1){
  
    Furtividade = 0;
    
    agilidade = agilidade - 30;
    
     document.getElementById("idagilidade").innerHTML =
          "🦵 Agilidade: " + agilidade;
    
    document.getElementById("idCheckFurtividade").innerHTML = "Habilidade: Furtividade";
    document.getElementById("idRetornoFurtividade").innerHTML = "";
    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";
    
    }
    /*Fim de remover Furtividade*/
  
  /* Início de remover Provocar */
  if (Provocar === 1){
  
    Provocar = 0;
    
    document.getElementById("idCheckProvocar").innerHTML =
          "Habilidade: Provocar";
    
          agilidade = agilidade - 40;
          percepcao = percepcao - 10;
          document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
          document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        
            document.getElementById("idRetornoProvocarNoStatus").innerHTML = "";
            document.getElementById("idRetornoProvocarNoStatus2").innerHTML = "";    
    }
    /*Fim de remover Provocar*/  

     /* Início de remover Fortalecimento */
   if (Fortalecimento === 1){
  
    Fortalecimento = 0;
    
    agilidade = agilidade - 10;
        forca = forca - 10;
        percepcao = percepcao - 10;
        inteligencia = inteligencia - 10;
        document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
    
        document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = "";
    
        document.getElementById("idCheckFortalecimento").innerHTML =
          "Habilidade: Fortalecimento";   
    }
    /*Fim de remover Fortalecimento*/ 

    /* Início de remover Arrancada */
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
    Assassina = 0;
    agilidade = agilidade - 5;

    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
    document.getElementById("idRetornoAssassina").innerHTML = "";
    document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Intenção Assassina */
  
   } 
   
   else { 
    
    vida = vida - 50;

    if (vida < 1) {
     vida = 0;
    }
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 50;
    if (fadiga > 99) {
     fadiga = 100;
    }
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
    document.getElementById(
      "idQuadroDeRetornoYoo")
     .innerHTML =
     "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
    document.getElementById(
      "idLutaContraYooBotao")
     .innerHTML =
     "Tentar novamente";
   }
    }
     /* início da luta do yoo com o título exterminador de goblins */
     if (TituloExterminadorDeGoblinsEstaEmUso === 1){

      agilidade = agilidade + 50;
      forca = forca + 50;
      percepcao = percepcao + 50;
      inteligencia = inteligencia + 50;

      if (vida < 50 || fadiga > 50) {
        document.getElementById(
          "idQuadroDeRetornoYoo")
         .innerHTML =
         "Vida ou Fadiga insuficiente";
       }  
       
       
       else if (vida > 49 && fadiga < 51 && forca > 95 && agilidade > 85 && percepcao > 65) {
    
        vida = vida - 50;
        if (vida < 1) {vida = 0;}
        progresso2.setAttribute("style", "width: " + vida + "%");
        document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
      
        fadiga = fadiga + 50;
        if (fadiga > 99) { fadiga = 100; }
        progresso.setAttribute("style", "width: " + fadiga + "%");
        document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
      
      Yoo = Yoo + 1;
        document.getElementById("idYoo").innerHTML = "🚶‍♂️População: " + Yoo + "/?";
      
      
        document.getElementById("idQuadroDeRetornoYoo") .innerHTML = "✨ VITÓRIA ✨ Você derrotou um Mostro [Recompensas: 1 ponto de experiência - 2 pontos de atributos para distribuir onde quiser]";
      
      
        experienciaYoo = experienciaYoo + 1;
        experienciaParaUsarNasHabilidades  =  experienciaParaUsarNasHabilidades +  1;
      
        document.getElementById("idexperienciaYoo").innerHTML =  "🏆 Experiência: " + experienciaYoo;
        document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " +  experienciaParaUsarNasHabilidades;
      
        document.getElementById( "idLutaContraYooBotao")
         .innerHTML = "Mostro derrotado";
      
      atributo = atributo + 2;
      
          document.getElementById("idatributo").innerHTML =  "Disponíveis: " + atributo;
      
            document.getElementById("idAlertaNoMenuAtributos").innerHTML = "⚠️ Atributos";
        
      /* Início de remover Furtividade */
  if (Furtividade === 1){
  
    Furtividade = 0;
    
    agilidade = agilidade - 30;
    
     document.getElementById("idagilidade").innerHTML =
          "🦵 Agilidade: " + agilidade;
    
    document.getElementById("idCheckFurtividade").innerHTML = "Habilidade: Furtividade";
    document.getElementById("idRetornoFurtividade").innerHTML = "";
    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";
    
    }
    /*Fim de remover Furtividade*/
      
      /* Início de remover Provocar */
      if (Provocar === 1){
      
        Provocar = 0;
        
        document.getElementById("idCheckProvocar").innerHTML =
              "Habilidade: Provocar";
        
              agilidade = agilidade - 40;
              percepcao = percepcao - 10;
              document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
              document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
            
                document.getElementById("idRetornoProvocarNoStatus").innerHTML = "";
                document.getElementById("idRetornoProvocarNoStatus2").innerHTML = "";    
        }
        /*Fim de remover Provocar*/  
    
         /* Início de remover Fortalecimento */
       if (Fortalecimento === 1){
      
        Fortalecimento = 0;
        
        agilidade = agilidade - 10;
            forca = forca - 10;
            percepcao = percepcao - 10;
            inteligencia = inteligencia - 10;
            document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
            document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
            document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
            document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
        
            document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = "";
            document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = "";
            document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = "";
            document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = "";
        
            document.getElementById("idCheckFortalecimento").innerHTML =
              "Habilidade: Fortalecimento";   
        }
        /*Fim de remover Fortalecimento*/ 
    
        /* Início de remover Arrancada */
      if (Arrancada === 1){
      
      Arrancada = 0;
      
      if (ArrancadaNivel2 === 0){
      agilidade = agilidade - 10;
      }
      if (ArrancadaNivel2 === 1){
      agilidade = agilidade - 20;
      }
      
       document.getElementById("idagilidade").innerHTML =
            "🦵 Agilidade: " + agilidade;
      
            document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
            document.getElementById("idRetornoArrancada").innerHTML = "";
            document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
      
      }
      /*Fim de remover Arrancada*/
      
      /* Início de remover Intenção Assassina */
      if (Assassina === 1){
      
        Assassina = 0;
        agilidade = agilidade - 5;
  
        document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
        document.getElementById("idRetornoAssassina").innerHTML = "";
        document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
      
      }
      /* Fim de remover Intenção Assassina */
      
       } 
       
       else { 
        
        vida = vida - 50;
    
        if (vida < 1) {
         vida = 0;
        }
      
        progresso2.setAttribute("style",
         "width: " + vida + "%");
        document.getElementById("idvida")
         .innerHTML = "❤️ Vida: " + vida +
         "%";
      
        fadiga = fadiga + 50;
        if (fadiga > 99) {
         fadiga = 100;
        }
        progresso.setAttribute("style",
         "width: " + fadiga + "%");
        document.getElementById(
          "idfadiga").innerHTML =
         "🪫Fadiga: " + fadiga + "%";
      
        document.getElementById(
          "idQuadroDeRetornoYoo")
         .innerHTML =
         "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
      
        document.getElementById(
          "idLutaContraYooBotao")
         .innerHTML =
         "Tentar novamente";
       }

       agilidade = agilidade - 50;
      forca = forca - 50;
      percepcao = percepcao - 50;
      inteligencia = inteligencia - 50;

     }
      /* fim da luta do yoo com o título exterminador de goblins */

  }
  /* FIM DA LUTA DO Yoo Jin-Ho */
  
  /* início da função equipar Elmo do Cavaleiro Carmesim */
  
  function funcaoEquiparElmo() {
    if (ElmoEquipada === 1) {
      document.getElementById("idRetornoEquiparElmo").innerHTML =
        "Elmo já equipado";
    } else if (Igris === 3 && ElmoEquipada === 0) {
      ElmoEquipada = 1;
  
      forca = forca + 20;
  
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
  
      document.getElementById("idRetornoEquiparElmo").innerHTML =
        "Elmo equipado com sucesso";
  
      document.getElementById("idItemElmoAdquirida").innerHTML =
        "✅ Elmo do Cavaleiro Carmesim";
  
  
      document.getElementById("idRetornoElmo").innerHTML = "+ 20";
       
    } else {
      document.getElementById("idRetornoEquiparElmo").innerHTML =
        "Necessário derrotar o Cavaleiro Comandante Igris o Vermelho-Sangue para adquirir esse Elmo";
    }
  }
  
  /* Fim da função equipar Elmo do Cavaleiro Carmesim */
  
   /* início da função equipar Adaga de Baruka */
  
   function funcaoEquiparAdagaDeBaruka() {
    if (AdagaDeBarukaEquipada === 1) {
      document.getElementById("idRetornoEquiparAdagaDeBaruka").innerHTML =
        "Adaga de Baruka já equipada";
    } else if (Baruka === 2 && AdagaDeBarukaEquipada === 0) {
      AdagaDeBarukaEquipada = 1;
  
      forca = forca + 110;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
  
    agilidade = agilidade + 10;
    document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;

      document.getElementById("idRetornoEquiparAdagaDeBaruka").innerHTML =
        "Adaga de Baruka equipada com sucesso";
  
      document.getElementById("idItemAdagaDeBarukaAdquirida").innerHTML =
        "✅ Adaga de Baruka";
  
  
      document.getElementById("idRetornoAdagaDeBaruka").innerHTML = "+ 110";
      document.getElementById("idRetornoAdagaDeBaruka2").innerHTML = "+ 10";
document.getElementById("idAlertaNoMenuInventario").innerHTML = "Inventário";

    } else {
      document.getElementById("idRetornoEquiparAdagaDeBaruka").innerHTML =
        "Necessário derrotar o Baruka Elfo do gelo para adquirir essa Adaga";
    }
  }
  
  /* Fim da função equipar Adaga de Baruka */

  /*início da função equipar Assassina de Cavaleiros*/
  
  function funcaoEquiparAssassinaCavaleiros() {
    if (AssassinaCavaleirosEquipada === 1) {
      document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML =
        "Adaga já equipada";
    } 
    else if (Igris === 3 && AssassinaCavaleirosEquipada === 0 && ouro < 200){
      document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML =
        "Ouro insuficiente";
    }
    
    else if (Igris === 3 && AssassinaCavaleirosEquipada === 0 && ouro > 199) {
      AssassinaCavaleirosEquipada = 1;
  
  ouro = ouro - 200;
  
      document.getElementById("idouro").innerHTML = "Ouro: " + ouro;
  
      forca = forca + 20;
  
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
  
      document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML =
        "Adaga equipada com sucesso";
  
      document.getElementById("idItemAssassinaCavaleirosAdquirida").innerHTML =
        "✅ Assassina de Cavaleiros";
  
      document.getElementById("idRetornoCompraAssassinaCavaleiros").innerHTML = "+ 20";
    } else {
      document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML =
        "Necessário derrotar o Igris para adquirir essa Adaga";
    }
  }
  
  /* Fim da função equipar Assassina de Cavaleiros */
  
  /* INÍCIO DO BOTÃO ANALISAR  DA LUTA DO MAGOS */
  function AnalisarLutaContraMagosBotao() {
   document.getElementById(
     "idQuadroDeRetornoMagos")
    .innerHTML =
    "Análise dos seus Status e dos Magos";
  
   document.getElementById(
     "idLutaContraMagosBotao")
    .innerHTML =
    "Seguir com a Luta";
  
   if (vida < 100) {
    document.getElementById("idVidaMagos").innerHTML = "❤️ Vida: 100%/" + vida + "%" + " ❌";
   }
  
   if (vida === 100) {
    document.getElementById(
      "idVidaMagos").innerHTML =
     "❤️ Vida: 100%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 0) {
    document.getElementById(
      "idFadigaMagos").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga === 0) {
    document.getElementById(
      "idFadigaMagos").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ✅";
   }
  
   if (agilidade < 141) {
    document.getElementById(
      "idAgilidadeMagos").innerHTML =
     "🦵 Agilidade: 140/" +
     agilidade + " ❌";
   }
  
   if (agilidade > 140) {
    document.getElementById(
      "idAgilidadeMagos").innerHTML =
     "🦵 Agilidade: 140/" +
     agilidade + " ✅";
   }
  
   if (forca > 145) {
    document.getElementById(
      "idForcaMagos").innerHTML =
     "💪 Força: 145/" +
     forca + " ✅";
   }
  
   if (forca < 146) {
    document.getElementById(
      "idForcaMagos").innerHTML =
     "💪 Força: 145/" +
     forca + " ❌";
   }
  
    if (percepcao < 86) {
    document.getElementById(
      "idPercepcaoMagos").innerHTML =
     "👀 Percepção: 85/" +
     percepcao + " ❌";
   }
   if (percepcao > 85) {
    document.getElementById(
      "idPercepcaoMagos").innerHTML =
     "👀 Percepção: 85/" +
     percepcao + " ✅";
   }
  
   if (inteligencia < 71) {
    document.getElementById(
      "idInteligenciaMagos").innerHTML =
     "🧠 Inteligência: 70/" +
     inteligencia + " ❌";
   }
   if (inteligencia > 70) {
    document.getElementById(
      "idInteligenciaMagos").innerHTML =
     "🧠 Inteligência: 70/" +
     inteligencia + " ✅";
   }
  
  }
  
  /*FIM DO BOTÃO ANALISAR LUTA DOS MAGOS */
  
  
  /* INÍCIO DA LUTA DOS MAGOS*/
  function LutaContraMagosBotao() {
   if (vida < 100 || fadiga > 0) {
    document.getElementById(
      "idQuadroDeRetornoMagos")
     .innerHTML =
     "Vida ou Fadiga insuficiente";
   } 
   
   else if (vida > 0 && fadiga < 100 && Magos === 1) {
    document.getElementById(
      "idQuadroDeRetornoMagos")
     .innerHTML =
     "✨ Você já derrotou os Magos ✨";
   } 
   
   else if (vida === 100 && fadiga === 0 && forca > 145 && agilidade > 140 &&  Magos === 0 && percepcao > 85 && inteligencia > 70) {

    document.getElementById("trocar-conteudo").innerHTML = "Clique aqui para aceitar a Classe Necromante [Monarca das Sombras]";

    alert("Aonde o Jogador vai, o anjo da morte o segue. Qualquer caminho que o Jogador seguir estará repleto de cadáveres e o fedor de sangue permanecerá. Além disso, o Jogador anseia por grande poder e abriu seu próprio caminho sem depender de outros. Sua sede de poder invoca os espíritos que vagam pelo vale da morte. Os fantasmas convocados pelo exército das sombras seguirão as ordens do Jogador e obedecerão apenas o Jogador. Sua classe foi alterada para: Necromante - Monarca das Sombras");
   
    document.getElementById("idQuadroDeRetornoMagos").innerHTML = "✨ VITÓRIA ✨ Você derrotou os 6 Magos";
    document.getElementById("idChecDosMagos").innerHTML = "⚠️ 6 Magos das Sombras";
    document.getElementById("idChecDoIgris").innerHTML = "⚠️ Igris - O Vermelho-Sangue";
    document.getElementById("idAlertaNoMenuClasseTitulo").innerHTML = "⚠️ Classe e Títulos";
    vida = vida - 100;
    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
    fadiga = fadiga + 100;
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
 Magos = 1;
    
  
     document.getElementById("idLutaContraMagosBotao") .innerHTML = "Magos derrotado";

/*Início do título Aquele que superou a Adversidade*/
  if (TituloAdversidadeEstaEmUso === 1){
   
    mana = mana + 30;

    if (mana > AumentoDoNivelDaMana) { mana = AumentoDoNivelDaMana; }

    document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");
      alert("Você ganhou 30% de mana referente ao Título: Aquele que Superou a Adversidade");
    
  }
  /*Fim do título Aquele que superou a Adversidade*/

     /* Início de remover Furtividade */
  if (Furtividade === 1){
  
    Furtividade = 0;
    
    agilidade = agilidade - 30;
    
     document.getElementById("idagilidade").innerHTML =
          "🦵 Agilidade: " + agilidade;
    
    document.getElementById("idCheckFurtividade").innerHTML = "Habilidade: Furtividade";
    document.getElementById("idRetornoFurtividade").innerHTML = "";
    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";
    
    }
    /*Fim de remover Furtividade*/
  
  /* Início de remover Provocar*/
   if (Provocar === 1){
  
    Provocar = 0;
    
    document.getElementById("idCheckProvocar").innerHTML =
          "Habilidade: Provocar";
    
          agilidade = agilidade - 40;
          percepcao = percepcao - 10;
          document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
          document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        
            document.getElementById("idRetornoProvocarNoStatus").innerHTML = "";
            document.getElementById("idRetornoProvocarNoStatus2").innerHTML = "";    
    }
    /*Fim de remover Provocar*/  

     /* Início de remover Fortalecimento */ 
   if (Fortalecimento === 1){
  
    Fortalecimento = 0;
    
    agilidade = agilidade - 10;
        forca = forca - 10;
        percepcao = percepcao - 10;
        inteligencia = inteligencia - 10;
        document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
    
        document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = "";
    
        document.getElementById("idCheckFortalecimento").innerHTML =
          "Habilidade: Fortalecimento";   
    }
    /*Fim de remover Fortalecimento*/ 
    
    /* Início de remover Arrancada */ 
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */ 
  if (Assassina === 1){
  
    Assassina = 0;
    agilidade = agilidade - 5;

    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
    document.getElementById("idRetornoAssassina").innerHTML = "";
    document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Intenção Assassina*/

 
  
   } 
   
   else {
    vida = vida - 100;
    
  
    progresso2.setAttribute("style",
     "width: " + vida + "%");
    document.getElementById("idvida")
     .innerHTML = "❤️ Vida: " + vida +
     "%";
  
    fadiga = fadiga + 100;
    
    progresso.setAttribute("style",
     "width: " + fadiga + "%");
    document.getElementById(
      "idfadiga").innerHTML =
     "🪫Fadiga: " + fadiga + "%";
  
    document.getElementById(
      "idQuadroDeRetornoMagos")
     .innerHTML =
     "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
    document.getElementById(
      "idLutaContraMagosBotao")
     .innerHTML =
     "Tentar novamente";
   }
  }
  /*FIM DA LUTA DO MAGOS*/

  /* Início da habilidade Arrancada 12345678910*/
function FuncaoArrancada() {

  if (ArrancadaNivel2 === 0){
  if (Kasaka === 0) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Habilidade será desbloqueada ao derrotar a Kasaka";
  }

  if (Kasaka > 0 && Arrancada === 1) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Buff já aplicado";
  }

  if (Kasaka > 0 && Arrancada === 0 && mana > 5) {
    Arrancada = 1;
    agilidade = agilidade + 10;

    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

    document.getElementById("idRetornoArrancadaNoStatus").innerHTML = " + 10";

    document.getElementById("idCheckArrancada").innerHTML =
      "✅ Habilidade: Arrancada";

     


    mana = mana - 6;
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");

    document.getElementById("idRetornoArrancada").innerHTML = "Buff aplicado";
  }

  if (Kasaka > 0 && Arrancada === 0 && mana < 6) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Mana insuficiente";
  }}

if (ArrancadaNivel2 === 1){
  if (Kasaka === 0) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Habilidade será desbloqueada ao derrotar a Kasaka";
  }

  if (Kasaka > 0 && Arrancada === 1) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Buff já aplicado";
  }

  if (Kasaka > 0 && Arrancada === 0 && mana > 5) {
    Arrancada = 1;
    agilidade = agilidade + 20;

    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

    document.getElementById("idRetornoArrancadaNoStatus").innerHTML = " + 20";

    document.getElementById("idCheckArrancada").innerHTML =
      "✅ Habilidade: Arrancada";

    mana = mana - 6;
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");

    document.getElementById("idRetornoArrancada").innerHTML = "Buff aplicado";
  }

  if (Kasaka > 0 && Arrancada === 0 && mana < 6) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Mana insuficiente";
  }}
}
/* Fim da habilidade Arrancada */


/* INÍCIO DA HABILIDADE SUBIR O NÍVEL arrancada */
function FuncaoArrancadaUplevel() {

if (ArrancadaNivel2 === 0 && experienciaParaUsarNasHabilidades > 44){

ArrancadaNivel2 = 1;
experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades - 45;

 document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

  document.getElementById("idRetornoArrancada").innerHTML =
      "Você subiu o nível da habilidade";


 document.getElementById("idRetornoArrancadaUplevel").innerHTML =
      "Buff que melhora sua Agilidade em 20 pontos.";

} 

else if (ArrancadaNivel2 === 0 && experienciaParaUsarNasHabilidades < 25){
  document.getElementById("idRetornoArrancada").innerHTML =
      "Experiência insuficiente";
}
else if (ArrancadaNivel2 === 1 && experienciaParaUsarNasHabilidades ){
  document.getElementById("idRetornoArrancada").innerHTML =
      "Você já evoluiu a Habilidade";
}

}
/*FIM DA HABILIDADE SUBIR O NÍVEL DA arrancada*/

/*INÍCIO DA HABILIDADE SUBIR O NÍVEL DA SAÚDE E LONGEVIDADE*/
function FuncaoSaudeElogenvidadeUplevel() {

if (SaudeElogenvidadeNivel2 === 0 && experienciaParaUsarNasHabilidades > 25){

SaudeElogenvidadeNivel2 = 1;
experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades - 25;

 document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

  document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você subiu o nível da habilidade";


document.getElementById("SaudeElogenvidadeUpleve").innerHTML = "Se a sua vida for maior ou igual a 80% gaste 1 ponto de Mana e ganhe 20% de vida";
} else if (SaudeElogenvidadeNivel2 === 0 && experienciaParaUsarNasHabilidades < 25){
  document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Experiência insuficiente";
}
else if (SaudeElogenvidadeNivel2 === 1 && experienciaParaUsarNasHabilidades ){
  document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você já evoluiu a Habilidade";
}

}
/*FIM DA HABILIDADE SUBIR O NÍVEL DA SAÚDE E LONGEVIDADE*/


/* Início da função atribuir pontos na PERCEPÇÃO  */
function funcaoatribuirpercepcao() {
  if (atributo > 0) {
    document.getElementById("idminerarcristal").innerHTML = "";
    document.getElementById("idvendercristal").innerHTML = "";

    atributo = atributo - 1;

    document.getElementById("idatributopercepcao").innerHTML =
      "1 ponto de atributo adicionado";
    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

    percepcao = percepcao + 1;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    /* início da função subir de nível */
    SomaDoNivel = SomaDoNivel + 1;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /* Fim da função subir de nível */
  } else {
    document.getElementById("idatributopercepcao").innerHTML =
      "Você não possui nenhum Ponto de atributo disponível";
  }
}
/*Fim da fução atribuir pontos na PERCEPÇÃO*/

/*Início da habilidade Extração de Sombras IGRIS*/
function FuncaoExtracaoIgris() {

  if (Magos < 2){
    document.getElementById("idRetornoExtracao1").innerHTML =
      "Habilidade exclussiva da Classe Necromante [Monarca das Sombras] - Derrote os 6 Magos para utilizar essa Habilidade!";
  }

  else if (SombraIgris === 1){
    document.getElementById("idRetornoExtracao1").innerHTML =
     "Igris já está em batalha!";
  }

    else if (Magos > 1 && mana > 49 && SombraIgris === 0){
      SombraIgris = 1;
    document.getElementById("idRetornoExtracao1").innerHTML = "Alma extraída com sucesso";

       document.getElementById("idChecDoIgris").innerHTML = "✅ Igris - O Vermelho-Sangue";

      mana = mana - 50;
      document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");


      agilidade = agilidade + 100;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisAgilidade").innerHTML = "+ 100";
      document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

      forca = forca + 120;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisForca").innerHTML = "+ 120";
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      percepcao = percepcao + 80;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisPercepcao").innerHTML = "+ 80";
      document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

      inteligencia = inteligencia + 60;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisInteligencia").innerHTML = "+ 60";
      document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;


  }
   else if (Magos > 1 && mana < 50 && SombraIgris === 0){
     document.getElementById("idRetornoExtracao1").innerHTML =
      "Mana insuficiente";
   }

 
  
}
/*Fim da habilidade Extração de Sombras IGRIS*/

/*Início da habilidade Extração de Sombras MAGOS*/
function FuncaoExtracaoMagos() {

  if (Magos < 2){
    document.getElementById("idRetornoExtracaoMagos").innerHTML =
      "Habilidade exclussiva da Classe Necromante [Monarca das Sombras] - Derrote os 6 Magos para utilizar essa Habilidade!";
  }
  else if (mana < 10){
    document.getElementById("idRetornoExtracaoMagos").innerHTML =
     "Mana insuficiente";
  }

  else if (SombraMago === 6){
    document.getElementById("idRetornoExtracaoMagos").innerHTML =
     "Todos os 6 Magos já estão em batalha!";
  }

    else if (Magos > 1 &&  mana > 9 && SombraMago === 0){
      SombraMago = SombraMago + 1;
    document.getElementById("idRetornoExtracaoMagos").innerHTML = "Alma extraída com sucesso [1 Mago no campo de batalha]";

      document.getElementById("idChecDosMagos").innerHTML = "✅ 6 Magos das Sombras";

      mana = mana - 10;
      document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");

      agilidade = agilidade + 24;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "+ 24";
      document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

      forca = forca + 23;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "+ 23";
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      percepcao = percepcao + 14;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "+ 14";
      document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

      inteligencia = inteligencia + 11;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "+ 11";
      document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  }

  else if (Magos > 1 &&  mana > 9 && SombraMago === 1){
    SombraMago = SombraMago + 1;
  document.getElementById("idRetornoExtracaoMagos").innerHTML = "Alma extraída com sucesso [2 Mago no campo de batalha]";

    document.getElementById("idChecDosMagos").innerHTML = "✅ 6 Magos das Sombras";

    mana = mana - 10;
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
    progresso3.setAttribute("style", "width: " + mana + "%");

    agilidade = agilidade + 24;
    document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "+ 48";
    document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

    forca = forca + 23;
    document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "+ 46";
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    percepcao = percepcao + 14;
    document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "+ 28";
    document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

    inteligencia = inteligencia + 11;
    document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "+ 22";
    document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

}

else if (Magos > 1 &&  mana > 9 && SombraMago === 2){
  SombraMago = SombraMago + 1;
document.getElementById("idRetornoExtracaoMagos").innerHTML = "Alma extraída com sucesso [3 Mago no campo de batalha]";

  document.getElementById("idChecDosMagos").innerHTML = "✅ 6 Magos das Sombras";

  mana = mana - 10;
  document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
  progresso3.setAttribute("style", "width: " + mana + "%");

  agilidade = agilidade + 24;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "+ 72";
  document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

  forca = forca + 23;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "+ 69";
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

  percepcao = percepcao + 14;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "+ 42";
  document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

  inteligencia = inteligencia + 11;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "+ 33";
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

}

else if (Magos > 1 &&  mana > 9 && SombraMago === 3){
  SombraMago = SombraMago + 1;
document.getElementById("idRetornoExtracaoMagos").innerHTML = "Alma extraída com sucesso [4 Mago no campo de batalha]";

  document.getElementById("idChecDosMagos").innerHTML = "✅ 6 Magos das Sombras";

  mana = mana - 10;
  document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
  progresso3.setAttribute("style", "width: " + mana + "%");

  agilidade = agilidade + 24;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "+ 96";
  document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

  forca = forca + 23;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "+ 92";
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

  percepcao = percepcao + 14;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "+ 56";
  document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

  inteligencia = inteligencia + 11;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "+ 44";
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

}

else if (Magos > 1 &&  mana > 9 && SombraMago === 4){
  SombraMago = SombraMago + 1;
document.getElementById("idRetornoExtracaoMagos").innerHTML = "Alma extraída com sucesso [5 Mago no campo de batalha]";

  document.getElementById("idChecDosMagos").innerHTML = "✅ 6 Magos das Sombras";

  mana = mana - 10;
  document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
  progresso3.setAttribute("style", "width: " + mana + "%");

  agilidade = agilidade + 24;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "+ 120";
  document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

  forca = forca + 23;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "+ 115";
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

  percepcao = percepcao + 14;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "+ 70";
  document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

  inteligencia = inteligencia + 11;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "+ 55";
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

}

else if (Magos > 1 &&  mana > 9 && SombraMago === 5){
  SombraMago = SombraMago + 1;
document.getElementById("idRetornoExtracaoMagos").innerHTML = "Alma extraída com sucesso [6 Mago no campo de batalha]";

  document.getElementById("idChecDosMagos").innerHTML = "✅ 6 Magos das Sombras";

  mana = mana - 10;
  document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
  progresso3.setAttribute("style", "width: " + mana + "%");

  agilidade = agilidade + 24;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "+ 144";
  document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

  forca = forca + 23;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "+ 138";
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

  percepcao = percepcao + 14;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "+ 84";
  document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

  inteligencia = inteligencia + 11;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "+ 66";
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

}
}
/* Fim da habilidade Extração de Sombras MAGOS */

/*Início abas do menu lateral esquerdo*/
function abrirAba(id) {
  const abas = document.querySelectorAll('.aba');
  const botoes = document.querySelectorAll('.botao');

  abas.forEach((aba) => {
    aba.classList.remove('ativo');
  });

  botoes.forEach((botao) => {
    botao.classList.remove('ativo');
  });

  document.getElementById(`aba${id}`).classList.add('ativo');
  botoes[id - 1].classList.add('ativo');
}
/*Fim abas do menu lateral esquerdo*/
  
  /*Início abas do menu Habilidades*/
 function abrirAbaHabilidades(id) {
      const abasHabilidades = document.querySelectorAll('.abaHabilidades');
      const botoesHabilidades = document.querySelectorAll('.botaoHabilidades');
    
      abasHabilidades.forEach((abaHabilidades) => {
        abaHabilidades.classList.remove('ativo');
      });
    
      botoesHabilidades.forEach((botaoHabilidades) => {
        botaoHabilidades.classList.remove('ativo');
      });
    
      document.getElementById(`abaHabilidades${id}`).classList.add('ativo');
      botoesHabilidades[id - 1].classList.add('ativo');
    }
     /*Fim abas do menu Habilidades*/

       /*Início abas do menu Treino*/
 function abrirAbaTreino(id) {
  const abasTreino = document.querySelectorAll('.abaTreino');
  const botoesTreino = document.querySelectorAll('.botaoTreino');

  abasTreino.forEach((abaTreino) => {
    abaTreino.classList.remove('ativo');
  });

  botoesTreino.forEach((botaoTreino) => {
    botaoTreino.classList.remove('ativo');
  });

  document.getElementById(`abaTreino${id}`).classList.add('ativo');
  botoesTreino[id - 1].classList.add('ativo');
}
 /*Fim abas do menu Treino*/

  /*Início abas do menu Classes e Títulos*/
  function abrirAbaArise(id) {
    const abasArise = document.querySelectorAll('.abaArise');
    const botoesArise = document.querySelectorAll('.botaoArise');
  
    abasArise.forEach((abaArise) => {
      abaArise.classList.remove('ativo');
    });
  
    botoesArise.forEach((botaoArise) => {
      botaoArise.classList.remove('ativo');
    });
  
    document.getElementById(`abaArise${id}`).classList.add('ativo');
    botoesArise[id - 1].classList.add('ativo');
  }
   /*Fim abas do menu Classes e Títulos*/

 /*Início abas do menu Loja*/
 function abrirAbaLoja(id) {
  const abasLoja = document.querySelectorAll('.abaLoja');
  const botoesLoja = document.querySelectorAll('.botaoLoja');

  abasLoja.forEach((abaLoja) => {
    abaLoja.classList.remove('ativo');
  });

  botoesLoja.forEach((botaoLoja) => {
    botaoLoja.classList.remove('ativo');
  });

  document.getElementById(`abaLoja${id}`).classList.add('ativo');
  botoesLoja[id - 1].classList.add('ativo');
}
 /*Fim abas do menu Loja*/

 /*Início abas do menu Inventario*/
 function abrirAbaInventario(id) {
  const abasInventario = document.querySelectorAll('.abaInventario');
  const botoesInventario = document.querySelectorAll('.botaoInventario');

  abasInventario.forEach((abaInventario) => {
    abaInventario.classList.remove('ativo');
  });

  botoesInventario.forEach((botaoInventario) => {
    botaoInventario.classList.remove('ativo');
  });

  document.getElementById(`abaInventario${id}`).classList.add('ativo');
  botoesInventario[id - 1].classList.add('ativo');
}
 /*Fim abas do menu Inventario*/

 
/*INÍCIO DA HABILIDADE APRIMORAMENTO DO SEGUNDO DESPERTAR*/
function FuncaoTrocarXPporAprimoramentoDoDespertar() {

 if (AumentoDoNivelDaMana === 100){
    document.getElementById(
      "idRetornoTrocarXPporAprimoramentoDoDespertar",).innerHTML = "Você chegou no nível máximo";
  }
  else if (experienciaParaUsarNasHabilidades > 0 ) {
  experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades - 1;
   AumentoDoNivelDaMana = AumentoDoNivelDaMana + 1;
 
   document.getElementById("idAumentoDoNivelDaMana").innerHTML =
   "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
   progresso3.setAttribute("style", "width: " + mana + "%");

   document.getElementById("idRetornoTrocarXPporAprimoramentoDoDespertar",).innerHTML = "Limite da Mana Atual: " +  AumentoDoNivelDaMana + "%";
 
   document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " +  experienciaParaUsarNasHabilidades;
 
  } else if (Kandiaru < 1) {
   document.getElementById(
     "idRetornoTrocarXPporAprimoramentoDoDespertar",).innerHTML = "Habilidade será liberada ao derrotar o Kandiaru";
  } else if (experienciaParaUsarNasHabilidades < 1){
   document.getElementById(
     "idRetornoTrocarXPporAprimoramentoDoDespertar",).innerHTML = "Você não tem Ponto de experiência";
  }
 }
 /*FIM DA HABILIDADE APRIMORAMENTO DO SEGUNDO DESPERTAR*/









 /*INÍCIO DO TÍTULO ENTUSIASTA DA MINERAÇÃO*/
function FuncaoTrocarTituloEntusiasta() {
  if (SomaDosCristais > 999 && TituloEntusiastaEstaEmUso === 0){

    TituloEntusiastaEstaEmUso = 1;

    document.getElementById("idTituloAlerta").innerHTML =   "";
    document.getElementById("idtitulo").innerHTML = "Título: Entusiata da Mineração";
    document.getElementById("idCheckEntusiasta").innerHTML =  "✅ Título: Entusiata da Mineração";
    document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "Título em Uso";
   
document.getElementById("idTituloRetornoAdversidade",).innerHTML = "";
document.getElementById("idTituloRetornoLobos",).innerHTML = "";
document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";


    percepcao = percepcao + 5;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
    document.getElementById("idPontosExtrasEntusiasta").innerHTML = "+ 5";

    /*início Remover os outros títulos*/
    if(TituloLordeDaMineracaoEstaEmUso === 1){
      TituloLordeDaMineracaoEstaEmUso = 0;
    document.getElementById("idCheckLordeDaMineracao").innerHTML = "Título: Lorde da Mineração";
    document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
    document.getElementById("idPontosExtrasLordeDaMineracao").innerHTML = "";
    percepcao = percepcao - 10;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
    }

    if(TituloExterminadorDeGoblinsEstaEmUso === 1){
      TituloExterminadorDeGoblinsEstaEmUso = 0;
      document.getElementById("idCheckGoblins").innerHTML =  "Título: Exterminador de Goblins";
      document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
         document.getElementById("idPontosExtrasGoblins1").innerHTML = "";
      document.getElementById("idPontosExtrasGoblins2").innerHTML = "";
      document.getElementById("idPontosExtrasGoblins3").innerHTML = "";
      document.getElementById("idPontosExtrasGoblins4").innerHTML = "";
    }

    if(TituloAssassinoDeLobosEstaEmUso === 1){
      TituloAssassinoDeLobosEstaEmUso = 0;
      document.getElementById("idCheckLobos").innerHTML =  "Título: Assassino de Lobos";
      document.getElementById("idTituloRetornoLobos",).innerHTML = "";
      document.getElementById("idPontosExtrasLobos1").innerHTML = "";
      document.getElementById("idPontosExtrasLobos2").innerHTML = "";
      document.getElementById("idPontosExtrasLobos3").innerHTML = "";
      document.getElementById("idPontosExtrasLobos4").innerHTML = "";
    }

    if(TituloAdversidadeEstaEmUso === 1){
      TituloAdversidadeEstaEmUso = 0;
      document.getElementById("idCheckAdversidade").innerHTML =  "Título: Aquele que Superou a Adversidade";
      document.getElementById("idTituloRetornoAdversidade",).innerHTML = "";
  
    }
 /*Fim Remover os outros títulos*/

  }
  else if (SomaDosCristais > 999 && TituloEntusiastaEstaEmUso === 1){
    document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "Título já está em Uso";
  }

  else{
    document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "Você ainda não conseguiu esse Título";
  }
}
 /*FIM DO TÍTULO ENTUSIASTA DA MINERAÇÃO*/


 /*INÍCIO DO TÍTULO LORDE DA MINERAÇÃO*/
function FuncaoTrocarTituloLordeDaMineracao() {
  if (SomaDosCristais > 3999 && TituloLordeDaMineracaoEstaEmUso === 0){

    TituloLordeDaMineracaoEstaEmUso = 1;

    document.getElementById("idTituloAlerta").innerHTML =   "";
    document.getElementById("idtitulo").innerHTML = "Título: Lorde da Mineração";
    document.getElementById("idCheckLordeDaMineracao").innerHTML =  "✅ Título: Lorde da Mineração";
    document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "Título em Uso";
   
    document.getElementById("idTituloRetornoAdversidade",).innerHTML = "";
    document.getElementById("idTituloRetornoLobos",).innerHTML = "";
     document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
     document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";

    percepcao = percepcao + 10;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
    document.getElementById("idPontosExtrasLordeDaMineracao").innerHTML = "+ 10";

 /*início Remover os outros títulos*/
 if (TituloEntusiastaEstaEmUso === 1){
  TituloEntusiastaEstaEmUso = 0;

    document.getElementById("idCheckEntusiasta").innerHTML =  "Título: Entusiata da Mineração";
    document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";
    document.getElementById("idPontosExtrasEntusiasta").innerHTML = "";
    percepcao = percepcao - 5;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
 }

 if(TituloExterminadorDeGoblinsEstaEmUso === 1){
    TituloExterminadorDeGoblinsEstaEmUso = 0;
  document.getElementById("idCheckGoblins").innerHTML =  "Título: Exterminador de Goblins";
  document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
     document.getElementById("idPontosExtrasGoblins1").innerHTML = "";
  document.getElementById("idPontosExtrasGoblins2").innerHTML = "";
  document.getElementById("idPontosExtrasGoblins3").innerHTML = "";
  document.getElementById("idPontosExtrasGoblins4").innerHTML = "";
}

if(TituloAssassinoDeLobosEstaEmUso === 1){
  TituloAssassinoDeLobosEstaEmUso = 0;
  document.getElementById("idCheckLobos").innerHTML =  "Título: Assassino de Lobos";
  document.getElementById("idTituloRetornoLobos",).innerHTML = "";
  document.getElementById("idPontosExtrasLobos1").innerHTML = "";
  document.getElementById("idPontosExtrasLobos2").innerHTML = "";
  document.getElementById("idPontosExtrasLobos3").innerHTML = "";
  document.getElementById("idPontosExtrasLobos4").innerHTML = "";
}

if(TituloAdversidadeEstaEmUso === 1){
  TituloAdversidadeEstaEmUso = 0;
  document.getElementById("idCheckAdversidade").innerHTML =  "Título: Aquele que Superou a Adversidade";
  document.getElementById("idTituloRetornoAdversidade",).innerHTML = "";

}
 /*Fim Remover os outros títulos*/

  } else if(SomaDosCristais > 3999 && TituloLordeDaMineracaoEstaEmUso === 1){
    document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "Título já está em Uso";
  }

  else{
    document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "Você ainda não conseguiu esse Título";
  }
}
 /*FIM DO TÍTULO LORDE DA MINERAÇÃO*/

 /*INÍCIO DO TÍTULO EXTERMINADOR DE GOBLINS*/
function FuncaoTrocarTituloGoblins() {
  if (Goblin > 9 && TituloExterminadorDeGoblinsEstaEmUso === 0){

    TituloExterminadorDeGoblinsEstaEmUso = 1;

    document.getElementById("idTituloAlerta").innerHTML =   "";
    document.getElementById("idtitulo").innerHTML = "Título: Exterminador de Goblins";
    document.getElementById("idCheckGoblins").innerHTML =  "✅ Título: Exterminador de Goblins";
    document.getElementById("idTituloRetornoGoblins",).innerHTML = "Título em Uso";
   
    document.getElementById("idTituloRetornoAdversidade",).innerHTML = "";
    document.getElementById("idTituloRetornoLobos",).innerHTML = "";
    document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
     document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";

    document.getElementById("idPontosExtrasGoblins1").innerHTML = "+ 50 [Somente contra Goblins]";
    document.getElementById("idPontosExtrasGoblins2").innerHTML = "+ 50 [Somente contra Goblins]";
    document.getElementById("idPontosExtrasGoblins3").innerHTML = "+ 50 [Somente contra Goblins]";
    document.getElementById("idPontosExtrasGoblins4").innerHTML = "+ 50 [Somente contra Goblins]";

 /*início Remover os outros títulos*/
 if(TituloLordeDaMineracaoEstaEmUso === 1){
  TituloLordeDaMineracaoEstaEmUso = 0;
document.getElementById("idCheckLordeDaMineracao").innerHTML = "Título: Lorde da Mineração";
document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
document.getElementById("idPontosExtrasLordeDaMineracao").innerHTML = "";
percepcao = percepcao - 10;
document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
}

 if (TituloEntusiastaEstaEmUso === 1){
  TituloEntusiastaEstaEmUso = 0;
    document.getElementById("idCheckEntusiasta").innerHTML = "Título: Entusiata da Mineração";
    document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";
    document.getElementById("idPontosExtrasEntusiasta").innerHTML = "";
    percepcao = percepcao - 5;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
 }

 if(TituloAssassinoDeLobosEstaEmUso === 1){
  TituloExterminadorDeGoblinsEstaEmUso = 0;
  document.getElementById("idCheckLobos").innerHTML =  "Título: Assassino de Lobos";
  document.getElementById("idTituloRetornoLobos",).innerHTML = "";
  document.getElementById("idPontosExtrasLobos1").innerHTML = "";
  document.getElementById("idPontosExtrasLobos2").innerHTML = "";
  document.getElementById("idPontosExtrasLobos3").innerHTML = "";
  document.getElementById("idPontosExtrasLobos4").innerHTML = "";
}
if(TituloAdversidadeEstaEmUso === 1){
  TituloAdversidadeEstaEmUso = 0;
  document.getElementById("idCheckAdversidade").innerHTML =  "Título: Aquele que Superou a Adversidade";
  document.getElementById("idTituloRetornoAdversidade",).innerHTML = "";

}
 /*Fim Remover os outros títulos*/

  } else if(Goblin > 9 && TituloExterminadorDeGoblinsEstaEmUso === 1){
    document.getElementById("idTituloRetornoGoblins",).innerHTML = "Título já está em Uso";
  }

  else{
    document.getElementById("idTituloRetornoGoblins",).innerHTML = "Você ainda não conseguiu esse Título";
  }
}
 /*FIM DO TÍTULO EXTERMINADOR DE GOBLINS*/


 /*INÍCIO DO TÍTULO ASSASSINO DE LOBOS*/
function FuncaoTrocarTituloLobos() {
  if (Lycan > 19 && TituloAssassinoDeLobosEstaEmUso === 0){

    TituloAssassinoDeLobosEstaEmUso = 1;

    document.getElementById("idTituloAlerta").innerHTML =   "";
    document.getElementById("idtitulo").innerHTML = "Título: Assassino de Lobos";
    document.getElementById("idCheckLobos").innerHTML =  "✅ Título: Assassino de Lobos";
    document.getElementById("idTituloRetornoLobos",).innerHTML = "Título em Uso";
   
    document.getElementById("idTituloRetornoAdversidade",).innerHTML = "";
 document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
 document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";
  
    document.getElementById("idPontosExtrasLobos1").innerHTML = "+ 40 [Somente contra Bestas Mágicas]";
    document.getElementById("idPontosExtrasLobos2").innerHTML = "+ 40 [Somente contra Bestas Mágicas]";
    document.getElementById("idPontosExtrasLobos3").innerHTML = "+ 40 [Somente contra Bestas Mágicas]";
    document.getElementById("idPontosExtrasLobos4").innerHTML = "+ 40 [Somente contra Bestas Mágicas]";

 /*início Remover os outros títulos*/
 if(TituloLordeDaMineracaoEstaEmUso === 1){
  TituloLordeDaMineracaoEstaEmUso = 0;
document.getElementById("idCheckLordeDaMineracao").innerHTML = "Título: Lorde da Mineração";
document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
document.getElementById("idPontosExtrasLordeDaMineracao").innerHTML = "";
percepcao = percepcao - 10;
document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
}

 if (TituloEntusiastaEstaEmUso === 1){
  TituloEntusiastaEstaEmUso = 0;
    document.getElementById("idCheckEntusiasta").innerHTML = "Título: Entusiata da Mineração";
    document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";
    document.getElementById("idPontosExtrasEntusiasta").innerHTML = "";
    percepcao = percepcao - 5;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
 }

 if(TituloExterminadorDeGoblinsEstaEmUso === 1){
  TituloExterminadorDeGoblinsEstaEmUso = 0;
  document.getElementById("idCheckGoblins").innerHTML =  "Título: Exterminador de Goblins";
  document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
     document.getElementById("idPontosExtrasGoblins1").innerHTML = "";
  document.getElementById("idPontosExtrasGoblins2").innerHTML = "";
  document.getElementById("idPontosExtrasGoblins3").innerHTML = "";
  document.getElementById("idPontosExtrasGoblins4").innerHTML = "";
}

if(TituloAdversidadeEstaEmUso === 1){
  TituloAdversidadeEstaEmUso = 0;
  document.getElementById("idCheckAdversidade").innerHTML =  "Título: Aquele que Superou a Adversidade";
  document.getElementById("idTituloRetornoAdversidade",).innerHTML = "";

}
 /*Fim Remover os outros títulos*/

  } else if(Lycan > 19 && TituloAssassinoDeLobosEstaEmUso === 1){
    document.getElementById("idTituloRetornoLobos",).innerHTML = "Título já está em Uso";
  }

  else{
    document.getElementById("idTituloRetornoLobos",).innerHTML = "Você ainda não conseguiu esse Título";
  }
}
 /*FIM DO TÍTULO ASSASSINO DE LOBOS*/

 /*INÍCIO DO TÍTULO AQUELE QUE SUPEROU A ADVERSIDADE*/
function FuncaoTrocarTituloAdversidade() {
  if (Igris > 2 && TituloAdversidadeEstaEmUso === 0){

    TituloAdversidadeEstaEmUso = 1;

    document.getElementById("idTituloAlerta").innerHTML =   "";
    document.getElementById("idtitulo").innerHTML = "Título: Aquele que Superou a Adversidade";
    document.getElementById("idCheckAdversidade").innerHTML =  "✅ Título: Aquele que Superou a Adversidade";
    document.getElementById("idTituloRetornoAdversidade",).innerHTML = "Título em Uso";

document.getElementById("idTituloRetornoLobos",).innerHTML = "";
 document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
 document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";

    /*início Remover os outros títulos*/

    if (TituloEntusiastaEstaEmUso === 1){
      TituloEntusiastaEstaEmUso = 0;
        document.getElementById("idCheckEntusiasta").innerHTML = "Título: Entusiata da Mineração";
        document.getElementById("idTituloRetornoEntusiasta",).innerHTML = "";
        document.getElementById("idPontosExtrasEntusiasta").innerHTML = "";
        percepcao = percepcao - 5;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
     }

    if(TituloLordeDaMineracaoEstaEmUso === 1){
      TituloLordeDaMineracaoEstaEmUso = 0;
    document.getElementById("idCheckLordeDaMineracao").innerHTML = "Título: Lorde da Mineração";
    document.getElementById("idTituloRetornoLordeDaMineracao",).innerHTML = "";
    document.getElementById("idPontosExtrasLordeDaMineracao").innerHTML = "";
    percepcao = percepcao - 10;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
    }

    if(TituloExterminadorDeGoblinsEstaEmUso === 1){
      TituloExterminadorDeGoblinsEstaEmUso = 0;
      document.getElementById("idCheckGoblins").innerHTML =  "Título: Exterminador de Goblins";
      document.getElementById("idTituloRetornoGoblins",).innerHTML = "";
         document.getElementById("idPontosExtrasGoblins1").innerHTML = "";
      document.getElementById("idPontosExtrasGoblins2").innerHTML = "";
      document.getElementById("idPontosExtrasGoblins3").innerHTML = "";
      document.getElementById("idPontosExtrasGoblins4").innerHTML = "";
    }

    if(TituloAssassinoDeLobosEstaEmUso === 1){
      TituloAssassinoDeLobosEstaEmUso = 0;
      document.getElementById("idCheckLobos").innerHTML =  "Título: Assassino de Lobos";
      document.getElementById("idTituloRetornoLobos",).innerHTML = "";
      document.getElementById("idPontosExtrasLobos1").innerHTML = "";
      document.getElementById("idPontosExtrasLobos2").innerHTML = "";
      document.getElementById("idPontosExtrasLobos3").innerHTML = "";
      document.getElementById("idPontosExtrasLobos4").innerHTML = "";
    }
 /*Fim Remover os outros títulos*/

  }
  else if ( Igris > 2 && TituloAdversidadeEstaEmUso === 1){
    document.getElementById("idTituloRetornoAdversidade",).innerHTML = "Título já está em Uso";
  }

  else{
    document.getElementById("idTituloRetornoAdversidade",).innerHTML = "Você ainda não conseguiu esse Título";
  }
}
 /*FIM DO TÍTULO AQUELE QUE SUPEROU A ADVERSIDADE*/


 



/*INÍCIO IR PARA O SOLO LEVELING ARISE*/
document.getElementById("trocar-conteudo").addEventListener("click", function() {

  document.getElementById("idClasse").innerHTML = "Classe: Necromante [Monarca das Sombras]";
  Magos = 2;

  /*Apagar todos os cards
document.getElementById("idDIVEsconderKandiaru").innerHTML = "";
document.getElementById("idDIVEsconderGoblin").innerHTML = "";
document.getElementById("idDIVEsconderLycan").innerHTML = "";
document.getElementById("idDIVEsconderKasaka").innerHTML = "";
document.getElementById("idDIVEsconderInsectoids").innerHTML = "";
document.getElementById("idDIVEsconderAranha").innerHTML = "";
document.getElementById("idDIVEsconderCacadores").innerHTML = "";
document.getElementById("idDIVEsconderCerberus").innerHTML = "";
document.getElementById("idDIVEsconderKang").innerHTML = "";
document.getElementById("idDIVEsconderYoo").innerHTML = "";
document.getElementById("idDIVEsconderIgris").innerHTML = "";
document.getElementById("idDIVEsconderMagos").innerHTML = "";
Apagar todos os cards*/

  var conteudo = document.getElementById("conteudo");
  var conteudoAlternativo = document.getElementById("conteudo-alternativo");
  conteudo.innerHTML = conteudoAlternativo.innerHTML;
  

});
/*FIM IR PARA O SOLO LEVELING ARISE*/

/*INÍCIO MENU PARA AS DUNGEOS*/
function abrirAbaNova(id) {
  const abasNova = document.querySelectorAll('.abaNova');
  const botoesNova = document.querySelectorAll('.botaoNova');

  abasNova.forEach((abaNova) => {
    abaNova.classList.remove('ativo');
  });

  botoesNova.forEach((botaoNova) => {
    botaoNova.classList.remove('ativo');
  });

  document.getElementById(`abaNova${id}`).classList.add('ativo');
  botoesNova[id - 1].classList.add('ativo');
}
/*FIM MENU PARA AS DUNGEOS*/

  /* INÍCIO DO BOTÃO ANALISAR LUTA DOS URSOS */
  function AnalisarLutaContraUrsosBotao() {

    document.getElementById("idQuadroDeRetornoUrsos") .innerHTML = "Análise dos seus Status e dos Ursos";
   
    document.getElementById("idLutaContraUrsosBotao") .innerHTML = "Seguir com a Luta";
   
    if (vida < 15) {document.getElementById("idVidaUrsos").innerHTML = "❤️ Vida: 15%/" + vida + "%" + " ❌"; }
    if (vida > 14) { document.getElementById( "idVidaUrsos").innerHTML = "❤️ Vida: 15%/" + vida + "%" + " ✅";
    }
   
    if (fadiga > 90) {document.getElementById( "idFadigaUrsos").innerHTML = "🪫Fadiga: 10%/" + fadiga + "%" + " ❌";
    }
    if (fadiga < 91) { document.getElementById( "idFadigaUrsos").innerHTML =  "🪫Fadiga: 10%/" + fadiga + "%" + " ✅";
    }
   
    if (agilidade < 331) { document.getElementById("idAgilidadeUrsos").innerHTML = "🦵 Agilidade: 330/" + agilidade + " ❌";
    }
    if (agilidade > 330) { document.getElementById("idAgilidadeUrsos").innerHTML = "🦵 Agilidade: 330/" +  agilidade + " ✅";
    }
   
    if (forca > 410) {document.getElementById("idForcaUrsos").innerHTML =  "💪 Força: 410/" + forca + " ✅";
    }
    if (forca < 411) { document.getElementById( "idForcaUrsos").innerHTML = "💪 Força: 410/" + forca + " ❌";
    }
   
     if (percepcao < 251) { document.getElementById( "idPercepcaoUrsos").innerHTML = "👀 Percepção: 250/" +  percepcao + " ❌";
    }
    if (percepcao > 250) {document.getElementById("idPercepcaoUrsos").innerHTML =  "👀 Percepção: 250/" +  percepcao + " ✅";
    }
   
    if (inteligencia < 201) {document.getElementById( "idInteligenciaUrsos").innerHTML = "🧠 Inteligência: 200/" +  inteligencia + " ❌";
    }
    if (inteligencia > 200) { document.getElementById( "idInteligenciaUrsos").innerHTML = "🧠 Inteligência: 200/" + inteligencia + " ✅";
    }
   
   }
   
   /*FIM DO BOTÃO ANALISAR  LUTA DOS URSOS */

   /*INÍCIO DA LUTA DOS URSOS*/
  function LutaContraUrsosBotao() {

    if (vida < 15 || fadiga > 90) {document.getElementById("idQuadroDeRetornoUrsos").innerHTML = "Vida ou Fadiga insuficiente"; } 
    
    else if (vida > 14 && fadiga < 91 && Ursos > 4) {document.getElementById("idQuadroDeRetornoUrsos")
      .innerHTML = "✨ Você derrotou todos os Ursos ✨";} 
    
    else if (
      vida > 14 && 
      fadiga < 91 && 
      agilidade > 330 &&
      forca > 410 && 
      percepcao > 250 &&
      inteligencia > 200 &&  
      Ursos < 5 
      ) {

      vida = vida - 15;
      if (vida < 1) {vida = 0;}
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 10;
      if (fadiga > 99) {fadiga = 100; }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
     Ursos = Ursos + 1;
      document.getElementById("idUrsos").innerHTML = "🚶‍♂️População: " + Ursos + "/5";
  
      document.getElementById("idQuadroDeRetornoUrsos").innerHTML = 
      "✨ VITÓRIA ✨ [Recompensas: 10 ponto de experiência - 4 Pontos de Atributos - 2 Pedras de Essência]";
  
      experienciaUrsos = experienciaUrsos + 10;
      document.getElementById("idexperienciaUrsos").innerHTML =  "🏆 Experiência: " + experienciaUrsos;

      experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 10;
      document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;
  
      document.getElementById("idLutaContraUrsosBotao").innerHTML = "Lutar novamente";
  
      atributo = atributo + 4;
      document.getElementById("idatributo").innerHTML =  "Disponíveis: " + atributo;
      document.getElementById("idAlertaNoMenuAtributos").innerHTML = "⚠️ Atributos";

      PedraDeEssencia = PedraDeEssencia + 2;
      document.getElementById("idpedrainventario").innerHTML =  "⚠️ Pedras de Essência: " + PedraDeEssencia;
      
      SomaPedraDeEssenciaUrsos = SomaPedraDeEssenciaUrsos + 2;
      document.getElementById("idPedrasDeEssenciaUrsos").innerHTML = "💎 Pedras de Essência: " + SomaPedraDeEssenciaUrsos;
  
     
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML = "⚠️ Inventário";

        if (Ursos === 5){
          document.getElementById("idChecDoTank").innerHTML = "⚠️ Tank - Urso de gelo escuro";
          document.getElementById("idAlertaNoMenuClasseTitulo").innerHTML = "⚠️ Classe e Títulos";
        }
        
  
      /*Início do título Aquele que superou a Adversidade*/
  if (TituloAdversidadeEstaEmUso === 1){
   
    mana = mana + 30;

    if (mana > AumentoDoNivelDaMana) { mana = AumentoDoNivelDaMana; }

    document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");
      alert("Você ganhou 30% de mana referente ao Título: Aquele que Superou a Adversidade");
    
  }
  /*Fim do título Aquele que superou a Adversidade*/
  
       /* Início do remover a Sombra do Igris*/
    if (SombraIgris === 1){
      SombraIgris = 0;
      document.getElementById("idRetornoExtracao1").innerHTML = "";
      document.getElementById("idChecDoIgris").innerHTML = "Igris - O Vermelho-Sangue";

      agilidade = agilidade - 100;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisAgilidade").innerHTML = "";
      document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

      forca = forca - 120;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisForca").innerHTML = "";
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      percepcao = percepcao - 80;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisPercepcao").innerHTML = "";
      document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

      inteligencia = inteligencia - 60;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisInteligencia").innerHTML = "";
      document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

      }
 /* Fim do remover a Sombra do Igris*/

 /* Início do remover a Sombra dos Magos*/
if (SombraMago >= 1 && SombraMago <= 6) {
  const atributos = {
    agilidade: [24, 48, 72, 96, 120, 144],
    forca: [23, 46, 69, 92, 115, 138],
    percepcao: [14, 28, 42, 56, 70, 84],
    inteligencia: [11, 22, 33, 44, 55, 66]
  };

  agilidade -= atributos.agilidade[SombraMago - 1];
  forca -= atributos.forca[SombraMago - 1];
  percepcao -= atributos.percepcao[SombraMago - 1];
  inteligencia -= atributos.inteligencia[SombraMago - 1];

  document.getElementById("idRetornoExtracaoMagos").innerHTML = "";
  document.getElementById("idChecDosMagos").innerHTML = "6 Magos das Sombras";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "";

  document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
  document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  SombraMago = 0;
}
/* Fim do remover a Sombra dos Magos*/

/*Início do remover a habilidade Provocar*/
  
  if (Provocar === 1) {

      Provocar = 0;
      
  
    agilidade = agilidade - 40;
    percepcao = percepcao - 10;
    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  
    document.getElementById("idRetornoProvocarNoStatus").innerHTML = "";
    document.getElementById("idRetornoProvocarNoStatus2").innerHTML = "";
  
    document.getElementById("idCheckProvocar").innerHTML = "Habilidade: Provocar";
    document.getElementById("idRetornoProvocar").innerHTML = "";
  }
  /* Fim do remover a habilidade Provocar*/

   /*Início de remover a habilidade Fortalecimento*/
    if (Fortalecimento === 1) {

        Fortalecimento = 0;
        
        agilidade = agilidade - 10;
        forca = forca - 10;
        percepcao = percepcao - 10;
        inteligencia = inteligencia - 10;
        document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
    
        document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = "";
        document.getElementById("idCheckFortalecimento").innerHTML = "Habilidade: Fortalecimento";
        document.getElementById("idRetornoFortalecimento").innerHTML = "";  
    }
    /* Fim de remover a habilidade Fortalecimento */

  /* Início de remover Arrancada*/
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
  Assassina = 0;
      agilidade = agilidade - 5;

      document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
      document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
      document.getElementById("idRetornoAssassina").innerHTML = "";
      document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Intenção Assassina*/
  
  /* Início de remover Furtividade */
  if (Furtividade === 1){
  
    Furtividade = 0;
    
    agilidade = agilidade - 30;
    
     document.getElementById("idagilidade").innerHTML =
          "🦵 Agilidade: " + agilidade;
    
    document.getElementById("idCheckFurtividade").innerHTML = "Habilidade: Furtividade";
    document.getElementById("idRetornoFurtividade").innerHTML = "";
    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";
    
    }
    /*Fim de remover Furtividade*/

      /* início da função subir de nível */
  
      SomaDoNivel = SomaDoNivel + 5;
      if (SomaDoNivel > SomaDoIndicadorDoNivel) {
        document.getElementById("idnivel").innerHTML =
          "Nível: " + EqualizadoDoNivel;
  
        alert("Level Up");
  
        EqualizadoDoNivel = EqualizadoDoNivel + 1;
        SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
      }
      /* Fim da função subir de nível */
    } 
    
    else {
      vida = vida - 15;
      if (vida < 1) {
        vida = 0;
      }
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 10;
      if (fadiga > 99) {
        fadiga = 100;
      }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      document.getElementById("idQuadroDeRetornoUrsos").innerHTML =
        "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
      document.getElementById("idLutaContraUrsosBotao").innerHTML =
        "Tentar novamente";
    }
  }

   /*FIM DA LUTA DOS URSOS*/

   /*Início da habilidade Extração de Sombras Tank*/
function FuncaoExtracaoTank() {

  if (Magos < 2){
    document.getElementById("idRetornoExtracaoTank").innerHTML =
      "Habilidade exclussiva da Classe Necromante [Monarca das Sombras] - Derrote os 6 Magos para utilizar essa Habilidade!";
  }

  else if (SombraTank === 1){
    document.getElementById("idRetornoExtracaoTank").innerHTML =
     "Tank já está em batalha!";
  }

  else if (Magos > 1 && Ursos < 5 && mana > 14 && SombraTank === 0){
    document.getElementById("idRetornoExtracaoTank").innerHTML = "Necessário matar todos os Ursos de Gelo para extrair a sua alma!";
  }

    else if (Magos > 1 && Ursos > 4 && mana > 14 && SombraTank === 0){
      SombraTank = 1;
    document.getElementById("idRetornoExtracaoTank").innerHTML = "Alma extraída com sucesso";

       document.getElementById("idChecDoTank").innerHTML = "✅ Tank - Urso de gelo escuro";

      mana = mana - 15;
      document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");


      agilidade = agilidade + 48;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankAgilidade").innerHTML = "+ 48";
      document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

      forca = forca + 46;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankForca").innerHTML = "+ 46";
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      percepcao = percepcao + 28;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankPercepcao").innerHTML = "+ 28";
      document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

      inteligencia = inteligencia + 22;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankInteligencia").innerHTML = "+ 22";
      document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;


  }
   else if (Magos > 1 && mana < 15 && SombraTank === 0){
     document.getElementById("idRetornoExtracaoTank").innerHTML =
      "Mana insuficiente";
   }

 
  
}
/*Fim da habilidade Extração de Sombras Tank*/

   /*INÍCIO DA LUTA DOS ELFOS*/
   function LutaContraElfosBotao() {

    if (vida < 20 || fadiga > 75) {document.getElementById("idQuadroDeRetornoElfos").innerHTML = "Vida ou Fadiga insuficiente"; } 
    
    else if (vida > 19 && fadiga < 76 && Elfos > 4) {document.getElementById("idQuadroDeRetornoElfos")
      .innerHTML = "✨ Você derrotou todos os Elfos ✨";} 
    
    else if (
      vida > 19 && 
      fadiga < 76 && 
      agilidade > 470 &&
      forca > 460 && 
      percepcao > 290 &&
      inteligencia > 230 &&  
      Elfos < 5 
      ) {

      vida = vida - 20;
      if (vida < 1) {vida = 0;}
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 25;
      if (fadiga > 99) {fadiga = 100; }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      Elfos = Elfos + 1;
      document.getElementById("idElfos").innerHTML = "🚶‍♂️População: " + Elfos + "/5";
  
      document.getElementById("idQuadroDeRetornoElfos").innerHTML = 
      "✨ VITÓRIA ✨ [Recompensas: 10 ponto de experiência - 4 Pontos de Atributos - 2 Pedras de Essência]";
  
      experienciaElfos = experienciaElfos + 10;
      document.getElementById("idexperienciaElfos").innerHTML =  "🏆 Experiência: " + experienciaElfos;

      experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 10;
      document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;
  
      document.getElementById("idLutaContraElfosBotao").innerHTML = "Lutar novamente";
  
      atributo = atributo + 4;
      document.getElementById("idatributo").innerHTML =  "Disponíveis: " + atributo;
      document.getElementById("idAlertaNoMenuAtributos").innerHTML = "⚠️ Atributos";

      PedraDeEssencia = PedraDeEssencia + 2;
      document.getElementById("idpedrainventario").innerHTML =  "⚠️ Pedras de Essência: " + PedraDeEssencia;
      
      SomaPedraDeEssenciaElfos = SomaPedraDeEssenciaElfos + 2;
      document.getElementById("idPedrasDeEssenciaElfos").innerHTML = "💎 Pedras de Essência: " + SomaPedraDeEssenciaElfos;
  
     
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML = "⚠️ Inventário";

             
  
      /*Início do título Aquele que superou a Adversidade*/
  if (TituloAdversidadeEstaEmUso === 1){
   
    mana = mana + 30;

    if (mana > AumentoDoNivelDaMana) { mana = AumentoDoNivelDaMana; }

    document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");
      alert("Você ganhou 30% de mana referente ao Título: Aquele que Superou a Adversidade");
    
  }
  /*Fim do título Aquele que superou a Adversidade*/
  
       /* Início do remover a Sombra do Igris*/
    if (SombraIgris === 1){
      SombraIgris = 0;
      document.getElementById("idRetornoExtracao1").innerHTML = "";
      document.getElementById("idChecDoIgris").innerHTML = "Igris - O Vermelho-Sangue";

      agilidade = agilidade - 100;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisAgilidade").innerHTML = "";
      document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

      forca = forca - 120;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisForca").innerHTML = "";
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      percepcao = percepcao - 80;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisPercepcao").innerHTML = "";
      document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

      inteligencia = inteligencia - 60;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisInteligencia").innerHTML = "";
      document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

      }
/* Fim do remover a Sombra do Igris*/

 /* Início do remover a Sombra dos Magos*/
if (SombraMago >= 1 && SombraMago <= 6) {
  const atributos = {
    agilidade: [24, 48, 72, 96, 120, 144],
    forca: [23, 46, 69, 92, 115, 138],
    percepcao: [14, 28, 42, 56, 70, 84],
    inteligencia: [11, 22, 33, 44, 55, 66]
  };

  agilidade -= atributos.agilidade[SombraMago - 1];
  forca -= atributos.forca[SombraMago - 1];
  percepcao -= atributos.percepcao[SombraMago - 1];
  inteligencia -= atributos.inteligencia[SombraMago - 1];

  document.getElementById("idRetornoExtracaoMagos").innerHTML = "";
  document.getElementById("idChecDosMagos").innerHTML = "6 Magos das Sombras";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "";

  document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
  document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  SombraMago = 0;
}
 /* Início do remover a Sombra dos Magos*/

   /* Início do remover a Sombra do Tank*/
   if (SombraTank === 1){
    SombraTank = 0;
    document.getElementById("idRetornoExtracaoTank").innerHTML = "";
    document.getElementById("idChecDoTank").innerHTML = "Tank - Urso de gelo escuro";

    agilidade = agilidade - 48;
    document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankAgilidade").innerHTML = "";
    document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

    forca = forca - 46;
    document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankForca").innerHTML = "";
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    percepcao = percepcao - 28;
    document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankPercepcao").innerHTML = "";
    document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

    inteligencia = inteligencia - 22;
    document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankInteligencia").innerHTML = "";
    document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

    }
/* Fim do remover a Sombra do Tank*/

/*Início do remover a habilidade Provocar*/
  
  if (Provocar === 1) {

      Provocar = 0;
      
  
    agilidade = agilidade - 40;
    percepcao = percepcao - 10;
    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  
    document.getElementById("idRetornoProvocarNoStatus").innerHTML = "";
    document.getElementById("idRetornoProvocarNoStatus2").innerHTML = "";
  
    document.getElementById("idCheckProvocar").innerHTML = "Habilidade: Provocar";
    document.getElementById("idRetornoProvocar").innerHTML = "";
  }
  /* Fim do remover a habilidade Provocar*/

   /*Início de remover a habilidade Fortalecimento*/
    if (Fortalecimento === 1) {

        Fortalecimento = 0;
        
        agilidade = agilidade - 10;
        forca = forca - 10;
        percepcao = percepcao - 10;
        inteligencia = inteligencia - 10;
        document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
    
        document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = "";
        document.getElementById("idCheckFortalecimento").innerHTML = "Habilidade: Fortalecimento";
        document.getElementById("idRetornoFortalecimento").innerHTML = "";  
    }
    /* Fim de remover a habilidade Fortalecimento */

  /* Início de remover Arrancada*/
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
  Assassina = 0;
      agilidade = agilidade - 5;

      document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
      document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
      document.getElementById("idRetornoAssassina").innerHTML = "";
      document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Intenção Assassina*/
  
  /* Início de remover Furtividade */
  if (Furtividade === 1){
  
    Furtividade = 0;
    
    agilidade = agilidade - 30;
    
     document.getElementById("idagilidade").innerHTML =
          "🦵 Agilidade: " + agilidade;
    
    document.getElementById("idCheckFurtividade").innerHTML = "Habilidade: Furtividade";
    document.getElementById("idRetornoFurtividade").innerHTML = "";
    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";
    
    }
    /*Fim de remover Furtividade*/
    
      /* início da função subir de nível */
  
      SomaDoNivel = SomaDoNivel + 5;
      if (SomaDoNivel > SomaDoIndicadorDoNivel) {
        document.getElementById("idnivel").innerHTML =
          "Nível: " + EqualizadoDoNivel;
  
        alert("Level Up");
  
        EqualizadoDoNivel = EqualizadoDoNivel + 1;
        SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
      }
      /* Fim da função subir de nível */
    } 
    
    else {
      vida = vida - 20;
      if (vida < 1) {
        vida = 0;
      }
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 25;
      if (fadiga > 99) {
        fadiga = 100;
      }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      document.getElementById("idQuadroDeRetornoElfos").innerHTML =
        "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
      document.getElementById("idLutaContraElfosBotao").innerHTML =
        "Tentar novamente";
    }
  }

   /*FIM DA LUTA DOS ELFOS*/

   /* INÍCIO DO BOTÃO ANALISAR LUTA DOS ELFOS */
  function AnalisarLutaContraElfosBotao() {

    document.getElementById("idQuadroDeRetornoElfos") .innerHTML = "Análise dos seus Status e dos Elfos";
   
    document.getElementById("idLutaContraElfosBotao") .innerHTML = "Seguir com a Luta";
   
    if (vida < 20) {document.getElementById("idVidaElfos").innerHTML = "❤️ Vida: 20%/" + vida + "%" + " ❌"; }
    if (vida > 19) { document.getElementById( "idVidaElfos").innerHTML = "❤️ Vida: 20%/" + vida + "%" + " ✅";
    }
   
    if (fadiga > 75) {document.getElementById( "idFadigaElfos").innerHTML = "🪫Fadiga: 25%/" + fadiga + "%" + " ❌";
    }
    if (fadiga < 76) { document.getElementById( "idFadigaElfos").innerHTML =  "🪫Fadiga: 25%/" + fadiga + "%" + " ✅";
    }
   
    if (agilidade < 471) { document.getElementById("idAgilidadeElfos").innerHTML = "🦵 Agilidade: 470/" + agilidade + " ❌";
    }
    if (agilidade > 470) { document.getElementById("idAgilidadeElfos").innerHTML = "🦵 Agilidade: 470/" +  agilidade + " ✅";
    }
   
    if (forca > 460) {document.getElementById("idForcaElfos").innerHTML =  "💪 Força: 460/" + forca + " ✅";
    }
    if (forca < 461) { document.getElementById( "idForcaElfos").innerHTML = "💪 Força: 460/" + forca + " ❌";
    }
   
     if (percepcao < 291) { document.getElementById( "idPercepcaoElfos").innerHTML = "👀 Percepção: 290/" +  percepcao + " ❌";
    }
    if (percepcao > 290) {document.getElementById("idPercepcaoElfos").innerHTML =  "👀 Percepção: 290/" +  percepcao + " ✅";
    }
   
    if (inteligencia < 231) {document.getElementById( "idInteligenciaElfos").innerHTML = "🧠 Inteligência: 230/" +  inteligencia + " ❌";
    }
    if (inteligencia > 230) { document.getElementById( "idInteligenciaElfos").innerHTML = "🧠 Inteligência: 230/" + inteligencia + " ✅";
    }
   
   }
   
   /*FIM DO BOTÃO ANALISAR  LUTA DOS ELFOS */

   /* INÍCIO DO BOTÃO ANALISAR LUTA DO Kin Chul */
  function AnalisarLutaContraKinChulBotao() {

    document.getElementById("idQuadroDeRetornoKinChul") .innerHTML = "Análise dos seus Status e do Kim Chul";
   
    document.getElementById("idLutaContraKinChulBotao") .innerHTML = "Seguir com a Luta";
   
    if (vida < 26) {document.getElementById("idVidaKinChul").innerHTML = "❤️ Vida: 25%/" + vida + "%" + " ❌"; }
    if (vida > 25) { document.getElementById( "idVidaKinChul").innerHTML = "❤️ Vida: 25%/" + vida + "%" + " ✅";
    }
   
    if (fadiga > 75) {document.getElementById( "idFadigaKinChul").innerHTML = "🪫Fadiga: 25%/" + fadiga + "%" + " ❌";
    }
    if (fadiga < 76) { document.getElementById( "idFadigaKinChul").innerHTML =  "🪫Fadiga: 25%/" + fadiga + "%" + " ✅";
    }
   
    if (agilidade < 471) { document.getElementById("idAgilidadeKinChul").innerHTML = "🦵 Agilidade: 470/" + agilidade + " ❌";
    }
    if (agilidade > 470) { document.getElementById("idAgilidadeKinChul").innerHTML = "🦵 Agilidade: 470/" +  agilidade + " ✅";
    }
   
    if (forca > 470) {document.getElementById("idForcaKinChul").innerHTML =  "💪 Força: 470/" + forca + " ✅";
    }
    if (forca < 471) { document.getElementById( "idForcaKinChul").innerHTML = "💪 Força: 470/" + forca + " ❌";
    }
   
     if (percepcao < 291) { document.getElementById( "idPercepcaoKinChul").innerHTML = "👀 Percepção: 290/" +  percepcao + " ❌";
    }
    if (percepcao > 290) {document.getElementById("idPercepcaoKinChul").innerHTML =  "👀 Percepção: 290/" +  percepcao + " ✅";
    }
   
    if (inteligencia < 201) {document.getElementById( "idInteligenciaKinChul").innerHTML = "🧠 Inteligência: 200/" +  inteligencia + " ❌";
    }
    if (inteligencia > 200) { document.getElementById( "idInteligenciaKinChul").innerHTML = "🧠 Inteligência: 200/" + inteligencia + " ✅";
    }
   
   }
   
   /*FIM DO BOTÃO ANALISAR  LUTA DO Kin Chul */

   /*INÍCIO DA LUTA DO Kin Chul*/
  function LutaContraKinChulBotao() {

    if (vida < 25 || fadiga > 74) {document.getElementById("idQuadroDeRetornoKinChul").innerHTML = "Vida ou Fadiga insuficiente"; } 
    
     
    else if (KinChul > 0) {document.getElementById("idQuadroDeRetornoKinChul")
      .innerHTML = "✨ Você já derrotou o Kim Chul ✨";} 

    else if (
      vida > 24 && 
      fadiga < 76 && 
      agilidade > 470 &&
      forca > 470 && 
      percepcao > 290 &&
      inteligencia > 200  &&
      KinChul < 1     
      ) {

      vida = vida - 25;
      if (vida < 1) {vida = 0;}
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 25;
      if (fadiga > 99) {fadiga = 100; }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      KinChul = KinChul + 1;
      document.getElementById("idKinChul").innerHTML = "⚔️ Rounds da batalha: " + KinChul + "/1";
  
      document.getElementById("idQuadroDeRetornoKinChul").innerHTML = 
      "✨ VITÓRIA ✨ [Recompensas: 5 ponto de experiência - 4 Pontos de Atributos]";
  
      experienciaKinChul = experienciaKinChul + 5;
      document.getElementById("idexperienciaKinChul").innerHTML =  "🏆 Experiência: " + experienciaKinChul;

      experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 5;
      document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;
  
      document.getElementById("idLutaContraKinChulBotao").innerHTML = "Lutar novamente";
  
      atributo = atributo + 4;
      document.getElementById("idatributo").innerHTML =  "Disponíveis: " + atributo;
      document.getElementById("idAlertaNoMenuAtributos").innerHTML = "⚠️ Atributos";

     document.getElementById("idChecDoIron").innerHTML = "⚠️ Iron - Caçador Rank A";
     document.getElementById("idAlertaNoMenuClasseTitulo").innerHTML = "⚠️ Classe e Títulos";
      
        
  
      /*Início do título Aquele que superou a Adversidade*/
  if (TituloAdversidadeEstaEmUso === 1){
   
    mana = mana + 30;

    if (mana > AumentoDoNivelDaMana) { mana = AumentoDoNivelDaMana; }

    document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");
      alert("Você ganhou 30% de mana referente ao Título: Aquele que Superou a Adversidade");
    
  }
  /*Fim do título Aquele que superou a Adversidade*/
  
       /* Início do remover a Sombra do Igris*/
    if (SombraIgris === 1){
      SombraIgris = 0;
      document.getElementById("idRetornoExtracao1").innerHTML = "";
      document.getElementById("idChecDoIgris").innerHTML = "Igris - O Vermelho-Sangue";

      agilidade = agilidade - 100;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisAgilidade").innerHTML = "";
      document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

      forca = forca - 120;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisForca").innerHTML = "";
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      percepcao = percepcao - 80;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisPercepcao").innerHTML = "";
      document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

      inteligencia = inteligencia - 60;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisInteligencia").innerHTML = "";
      document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

      }
 /* Fim do remover a Sombra do Igris*/

 /* Início do remover a Sombra dos Magos*/
if (SombraMago >= 1 && SombraMago <= 6) {
  const atributos = {
    agilidade: [24, 48, 72, 96, 120, 144],
    forca: [23, 46, 69, 92, 115, 138],
    percepcao: [14, 28, 42, 56, 70, 84],
    inteligencia: [11, 22, 33, 44, 55, 66]
  };

  agilidade -= atributos.agilidade[SombraMago - 1];
  forca -= atributos.forca[SombraMago - 1];
  percepcao -= atributos.percepcao[SombraMago - 1];
  inteligencia -= atributos.inteligencia[SombraMago - 1];

  document.getElementById("idRetornoExtracaoMagos").innerHTML = "";
  document.getElementById("idChecDosMagos").innerHTML = "6 Magos das Sombras";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "";

  document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
  document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  SombraMago = 0;
}
/* Fim do remover a Sombra dos Magos*/

/* Início do remover a Sombra do Tank*/
if (SombraTank === 1){
  SombraTank = 0;
  document.getElementById("idRetornoExtracaoTank").innerHTML = "";
  document.getElementById("idChecDoTank").innerHTML = "Tank - Urso de gelo escuro";

  agilidade = agilidade - 48;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankAgilidade").innerHTML = "";
  document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

  forca = forca - 46;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankForca").innerHTML = "";
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

  percepcao = percepcao - 28;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankPercepcao").innerHTML = "";
  document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

  inteligencia = inteligencia - 22;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankInteligencia").innerHTML = "";
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  }
/* Fim do remover a Sombra do Tank*/

/*Início do remover a habilidade Provocar*/
  
  if (Provocar === 1) {

      Provocar = 0;
      
  
    agilidade = agilidade - 40;
    percepcao = percepcao - 10;
    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  
    document.getElementById("idRetornoProvocarNoStatus").innerHTML = "";
    document.getElementById("idRetornoProvocarNoStatus2").innerHTML = "";
  
    document.getElementById("idCheckProvocar").innerHTML = "Habilidade: Provocar";
    document.getElementById("idRetornoProvocar").innerHTML = "";
  }
  /* Fim do remover a habilidade Provocar*/

   /*Início de remover a habilidade Fortalecimento*/
    if (Fortalecimento === 1) {

        Fortalecimento = 0;
        
        agilidade = agilidade - 10;
        forca = forca - 10;
        percepcao = percepcao - 10;
        inteligencia = inteligencia - 10;
        document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
    
        document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = "";
        document.getElementById("idCheckFortalecimento").innerHTML = "Habilidade: Fortalecimento";
        document.getElementById("idRetornoFortalecimento").innerHTML = "";  
    }
    /* Fim de remover a habilidade Fortalecimento */

  /* Início de remover Arrancada*/
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
  Assassina = 0;
      agilidade = agilidade - 5;

      document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
      document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
      document.getElementById("idRetornoAssassina").innerHTML = "";
      document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Intenção Assassina*/
  
  /* Início de remover Furtividade */
  if (Furtividade === 1){
  
    Furtividade = 0;
    
    agilidade = agilidade - 30;
    
     document.getElementById("idagilidade").innerHTML =
          "🦵 Agilidade: " + agilidade;
    
    document.getElementById("idCheckFurtividade").innerHTML = "Habilidade: Furtividade";
    document.getElementById("idRetornoFurtividade").innerHTML = "";
    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";
    
    }
    /*Fim de remover Furtividade*/

      /* início da função subir de nível */
  
      SomaDoNivel = SomaDoNivel + 5;
      if (SomaDoNivel > SomaDoIndicadorDoNivel) {
        document.getElementById("idnivel").innerHTML =
          "Nível: " + EqualizadoDoNivel;
  
        alert("Level Up");
  
        EqualizadoDoNivel = EqualizadoDoNivel + 1;
        SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
      }
      /* Fim da função subir de nível */
    } 
    
    else {
      vida = vida - 25;
      if (vida < 1) {
        vida = 0;
      }
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 25;
      if (fadiga > 99) {
        fadiga = 100;
      }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      document.getElementById("idQuadroDeRetornoKinChul").innerHTML =
        "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
      document.getElementById("idLutaContraKinChulBotao").innerHTML =
        "Tentar novamente";
    }
  }

   /*FIM DA LUTA DO Kin Chul*/


 /*Início da habilidade Extração de Sombras Iron*/
 function FuncaoExtracaoIron() {

  if (Magos < 2){
    document.getElementById("idRetornoExtracaoIron").innerHTML =
      "Habilidade exclussiva da Classe Necromante [Monarca das Sombras] - Derrote os 6 Magos para utilizar essa Habilidade!";
  }

  else if (SombraIron === 1){
    document.getElementById("idRetornoExtracaoIron").innerHTML =
     "Iron já está em batalha!";
  }

  else if (Magos > 1 && SombraIron === 0 && KinChul === 0){
    document.getElementById("idRetornoExtracaoIron").innerHTML = "Necessário matar o Kim Chul para extrair a sua alma!";
  }

    else if (Magos > 1 && mana > 49 && SombraIron === 0 && KinChul === 1){
      SombraIron = 1;
    document.getElementById("idRetornoExtracaoIron").innerHTML = "Alma extraída com sucesso";

       document.getElementById("idChecDoIron").innerHTML = "✅ Iron - Caçador Rank A";

      mana = mana - 50;
      document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");


      agilidade = agilidade + 90;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronAgilidade").innerHTML = "+ 90";
      document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

      forca = forca + 140;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronForca").innerHTML = "+ 140";
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      percepcao = percepcao + 70;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronPercepcao").innerHTML = "+ 70";
      document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

      inteligencia = inteligencia + 40;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronInteligencia").innerHTML = "+ 40";
      document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;


  }
   else if (Magos > 1 && mana < 50 && SombraIron === 0){
     document.getElementById("idRetornoExtracaoIron").innerHTML =
      "Mana insuficiente";
   }

 
  
}
/*Fim da habilidade Extração de Sombras Iron*/

/* INÍCIO DO BOTÃO ANALISAR LUTA DO Baruka */
function AnalisarLutaContraBarukaBotao() {

  document.getElementById("idQuadroDeRetornoBaruka") .innerHTML = "Análise dos seus Status e do Baruka";
 
  document.getElementById("idLutaContraBarukaBotao") .innerHTML = "Seguir com a Luta";
 
  if (vida < 80) {document.getElementById("idVidaBaruka").innerHTML = "❤️ Vida: 80%/" + vida + "%" + " ❌"; }
  if (vida > 79) { document.getElementById( "idVidaBaruka").innerHTML = "❤️ Vida: 80%/" + vida + "%" + " ✅";
  }
 
  if (fadiga > 10) {document.getElementById( "idFadigaBaruka").innerHTML = "🪫Fadiga: 90%/" + fadiga + "%" + " ❌";
  }
  if (fadiga < 11) { document.getElementById( "idFadigaBaruka").innerHTML =  "🪫Fadiga: 90%/" + fadiga + "%" + " ✅";
  }
 
  if (agilidade < 501) { document.getElementById("idAgilidadeBaruka").innerHTML = "🦵 Agilidade: 500/" + agilidade + " ❌";
  }
  if (agilidade > 500) { document.getElementById("idAgilidadeBaruka").innerHTML = "🦵 Agilidade: 500/" +  agilidade + " ✅";
  }
 
  if (forca > 540) {document.getElementById("idForcaBaruka").innerHTML =  "💪 Força: 540/" + forca + " ✅";
  }
  if (forca < 541) { document.getElementById( "idForcaBaruka").innerHTML = "💪 Força: 540/" + forca + " ❌";
  }
 
   if (percepcao < 311) { document.getElementById( "idPercepcaoBaruka").innerHTML = "👀 Percepção: 310/" +  percepcao + " ❌";
  }
  if (percepcao > 310) {document.getElementById("idPercepcaoBaruka").innerHTML =  "👀 Percepção: 310/" +  percepcao + " ✅";
  }
 
  if (inteligencia < 241) {document.getElementById( "idInteligenciaBaruka").innerHTML = "🧠 Inteligência: 240/" +  inteligencia + " ❌";
  }
  if (inteligencia > 240) { document.getElementById( "idInteligenciaBaruka").innerHTML = "🧠 Inteligência: 240/" + inteligencia + " ✅";
  }
 
 }
 
 /*FIM DO BOTÃO ANALISAR  LUTA DO Baruka */

 
   /*INÍCIO DA LUTA DO BARUKA */
   function LutaContraBarukaBotao() {

    if (vida < 20 || fadiga > 10) {document.getElementById("idQuadroDeRetornoBaruka").innerHTML = "Vida ou Fadiga insuficiente"; } 
    
    else if (Baruka > 1) {document.getElementById("idQuadroDeRetornoBaruka")
      .innerHTML = "✨ Você já derrotou o Baruka ✨";} 
    
    else if (
      vida > 19 && 
      fadiga < 11 && 
      agilidade > 500 &&
      forca > 540 && 
      percepcao > 310 &&
      inteligencia > 240 &&  
      Baruka < 2 
      ) {
       
      vida = vida - 80;
      if (vida < 1) {vida = 0;}
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 90;
      if (fadiga > 99) {fadiga = 100; }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      Baruka = Baruka + 1;
      document.getElementById("idBaruka").innerHTML = "⚔️ Rounds da batalha: " + Baruka + "/2";
  
      document.getElementById("idQuadroDeRetornoBaruka").innerHTML = 
      "✨ VITÓRIA ✨ [Recompensas: 10 ponto de experiência - 4 Pontos de Atributos - 2 Pedras de Essência]";
  
      experienciaBaruka = experienciaBaruka + 10;
      document.getElementById("idexperienciaBaruka").innerHTML =  "🏆 Experiência: " + experienciaBaruka;

     

      experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 10;
      document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;
  
      document.getElementById("idLutaContraBarukaBotao").innerHTML = "Lutar novamente";
  
      atributo = atributo + 4;
      document.getElementById("idatributo").innerHTML =  "Disponíveis: " + atributo;
      document.getElementById("idAlertaNoMenuAtributos").innerHTML = "⚠️ Atributos";

      PedraDeEssencia = PedraDeEssencia + 2;
      document.getElementById("idpedrainventario").innerHTML =  "⚠️ Pedras de Essência: " + PedraDeEssencia;
     
      SomaPedraDeEssenciaBaruka = SomaPedraDeEssenciaBaruka + 2;
      document.getElementById("idPedrasDeEssenciaBaruka").innerHTML = "💎 Pedras de Essência: " + SomaPedraDeEssenciaBaruka;
  
     
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML = "⚠️ Inventário";
        
        if(Baruka === 2){
          
          document.getElementById("idQuadroDeRetornoBaruka").innerHTML = 
      "✨ VITÓRIA ✨ [Recompensas: 10 ponto de experiência - 4 Pontos de Atributos - 2 Pedras de Essência - Adaga de Baruka]";

          
          document.getElementById("idItemAdagaDeBarukaAdquirida").innerHTML = "⚠️ Adaga de Baruka";
       }

      /*Início do título Aquele que superou a Adversidade*/
  if (TituloAdversidadeEstaEmUso === 1){
   
    mana = mana + 30;

    if (mana > AumentoDoNivelDaMana) { mana = AumentoDoNivelDaMana; }

    document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");
      alert("Você ganhou 30% de mana referente ao Título: Aquele que Superou a Adversidade");
    
  }
  /*Fim do título Aquele que superou a Adversidade*/
  
       /* Início do remover a Sombra do Igris*/
    if (SombraIgris === 1){
      SombraIgris = 0;
      document.getElementById("idRetornoExtracao1").innerHTML = "";
      document.getElementById("idChecDoIgris").innerHTML = "Igris - O Vermelho-Sangue";

      agilidade = agilidade - 100;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisAgilidade").innerHTML = "";
      document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

      forca = forca - 120;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisForca").innerHTML = "";
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      percepcao = percepcao - 80;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisPercepcao").innerHTML = "";
      document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

      inteligencia = inteligencia - 60;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisInteligencia").innerHTML = "";
      document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

      }
 /* Fim do remover a Sombra do Igris*/

 /* Início do remover a Sombra dos Magos*/
if (SombraMago >= 1 && SombraMago <= 6) {
  const atributos = {
    agilidade: [24, 48, 72, 96, 120, 144],
    forca: [23, 46, 69, 92, 115, 138],
    percepcao: [14, 28, 42, 56, 70, 84],
    inteligencia: [11, 22, 33, 44, 55, 66]
  };

  agilidade -= atributos.agilidade[SombraMago - 1];
  forca -= atributos.forca[SombraMago - 1];
  percepcao -= atributos.percepcao[SombraMago - 1];
  inteligencia -= atributos.inteligencia[SombraMago - 1];

  document.getElementById("idRetornoExtracaoMagos").innerHTML = "";
  document.getElementById("idChecDosMagos").innerHTML = "6 Magos das Sombras";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "";

  document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
  document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  SombraMago = 0;
}
/* Fim do remover a Sombra dos Magos*/

 /* Início do remover a Sombra do Tank*/
 if (SombraTank === 1){
  SombraTank = 0;
  document.getElementById("idRetornoExtracaoTank").innerHTML = "";
  document.getElementById("idChecDoTank").innerHTML = "Tank - Urso de gelo escuro";

  agilidade = agilidade - 48;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankAgilidade").innerHTML = "";
  document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

  forca = forca - 46;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankForca").innerHTML = "";
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

  percepcao = percepcao - 28;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankPercepcao").innerHTML = "";
  document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

  inteligencia = inteligencia - 22;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankInteligencia").innerHTML = "";
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  }
/* Fim do remover a Sombra do Tank*/

 /* Início do remover a Sombra do Iron*/
 if (SombraIron === 1){
  SombraIron = 0;
  document.getElementById("idRetornoExtracaoIron").innerHTML = "";
  document.getElementById("idChecDoIron").innerHTML = "Iron - Caçador Rank A";

  agilidade = agilidade - 90;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronAgilidade").innerHTML = "";
  document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

  forca = forca - 140;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronForca").innerHTML = "";
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

  percepcao = percepcao - 70;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronPercepcao").innerHTML = "";
  document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

  inteligencia = inteligencia - 40;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronInteligencia").innerHTML = "";
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  }
/* Fim do remover a Sombra do Iron*/

/*Início do remover a habilidade Provocar*/
  
  if (Provocar === 1) {

      Provocar = 0;
      
  
    agilidade = agilidade - 40;
    percepcao = percepcao - 10;
    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  
    document.getElementById("idRetornoProvocarNoStatus").innerHTML = "";
    document.getElementById("idRetornoProvocarNoStatus2").innerHTML = "";
  
    document.getElementById("idCheckProvocar").innerHTML = "Habilidade: Provocar";
    document.getElementById("idRetornoProvocar").innerHTML = "";
  }
  /* Fim do remover a habilidade Provocar*/

   /*Início de remover a habilidade Fortalecimento*/
    if (Fortalecimento === 1) {

        Fortalecimento = 0;
        
        agilidade = agilidade - 10;
        forca = forca - 10;
        percepcao = percepcao - 10;
        inteligencia = inteligencia - 10;
        document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
    
        document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = "";
        document.getElementById("idCheckFortalecimento").innerHTML = "Habilidade: Fortalecimento";
        document.getElementById("idRetornoFortalecimento").innerHTML = "";  
    }
    /* Fim de remover a habilidade Fortalecimento */

  /* Início de remover Arrancada*/
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
  Assassina = 0;
      agilidade = agilidade - 5;

      document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
      document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
      document.getElementById("idRetornoAssassina").innerHTML = "";
      document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Intenção Assassina*/
  
  /* Início de remover Furtividade */
  if (Furtividade === 1){
  
    Furtividade = 0;
    
    agilidade = agilidade - 30;
    
     document.getElementById("idagilidade").innerHTML =
          "🦵 Agilidade: " + agilidade;
    
    document.getElementById("idCheckFurtividade").innerHTML = "Habilidade: Furtividade";
    document.getElementById("idRetornoFurtividade").innerHTML = "";
    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";
    
    }
    /*Fim de remover Furtividade*/

      /* início da função subir de nível */
  
      SomaDoNivel = SomaDoNivel + 5;
      if (SomaDoNivel > SomaDoIndicadorDoNivel) {
        document.getElementById("idnivel").innerHTML =
          "Nível: " + EqualizadoDoNivel;
  
        alert("Level Up");
  
        EqualizadoDoNivel = EqualizadoDoNivel + 1;
        SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
      }
      /* Fim da função subir de nível */

     
    } 
    
    else {
      vida = vida - 80;
      if (vida < 1) {
        vida = 0;
      }
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 90;
      if (fadiga > 99) {
        fadiga = 100;
      }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      document.getElementById("idQuadroDeRetornoBaruka").innerHTML =
        "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
      document.getElementById("idLutaContraBarukaBotao").innerHTML =
        "Tentar novamente";
    }
  }

   /*FIM DA LUTA DO BARUKA*/

   /* INÍCIO DO BOTÃO ANALISAR LUTA DO Kargalgan */
function AnalisarLutaContraKargalganBotao() {

  document.getElementById("idQuadroDeRetornoKargalgan") .innerHTML = "Análise dos seus Status e do Kargalgan";
 
  document.getElementById("idLutaContraKargalganBotao") .innerHTML = "Seguir com a Luta";
 
  if (vida < 50) {document.getElementById("idVidaKargalgan").innerHTML = "❤️ Vida: 50%/" + vida + "%" + " ❌"; }
  if (vida > 49) { document.getElementById( "idVidaKargalgan").innerHTML = "❤️ Vida: 50%/" + vida + "%" + " ✅";
  }
 
  if (fadiga > 40) {document.getElementById( "idFadigaKargalgan").innerHTML = "🪫Fadiga: 60%/" + fadiga + "%" + " ❌";
  }
  if (fadiga < 41) { document.getElementById( "idFadigaKargalgan").innerHTML =  "🪫Fadiga: 60%/" + fadiga + "%" + " ✅";
  }
 
  if (agilidade < 511) { document.getElementById("idAgilidadeKargalgan").innerHTML = "🦵 Agilidade: 510/" + agilidade + " ❌";
  }
  if (agilidade > 510) { document.getElementById("idAgilidadeKargalgan").innerHTML = "🦵 Agilidade: 510/" +  agilidade + " ✅";
  }
 
  if (forca > 650) {document.getElementById("idForcaKargalgan").innerHTML =  "💪 Força: 650/" + forca + " ✅";
  }
  if (forca < 651) { document.getElementById( "idForcaKargalgan").innerHTML = "💪 Força: 650/" + forca + " ❌";
  }
 
   if (percepcao < 351) { document.getElementById( "idPercepcaoKargalgan").innerHTML = "👀 Percepção: 350/" +  percepcao + " ❌";
  }
  if (percepcao > 350) {document.getElementById("idPercepcaoKargalgan").innerHTML =  "👀 Percepção: 350/" +  percepcao + " ✅";
  }
 
  if (inteligencia < 271) {document.getElementById( "idInteligenciaKargalgan").innerHTML = "🧠 Inteligência: 270/" +  inteligencia + " ❌";
  }
  if (inteligencia > 270) { document.getElementById( "idInteligenciaKargalgan").innerHTML = "🧠 Inteligência: 270/" + inteligencia + " ✅";
  }
 
 }
 
 /*FIM DO BOTÃO ANALISAR  LUTA DO Kargalgan */

  /*INÍCIO DA LUTA DO Kargalgan */
  function LutaContraKargalganBotao() {

    if (vida < 50 || fadiga > 40) {document.getElementById("idQuadroDeRetornoKargalgan").innerHTML = "Vida ou Fadiga insuficiente"; } 
    
    else if (Kargalgan > 0) {document.getElementById("idQuadroDeRetornoKargalgan")
      .innerHTML = "✨ Você já derrotou o Kargalgan ✨";} 
    
    else if (
      vida > 49 && 
      fadiga < 40 && 
      agilidade > 510 &&
      forca > 650 && 
      percepcao > 350 &&
      inteligencia > 270
      ) {
       
      vida = vida - 50;
      if (vida < 1) {vida = 0;}
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 60;
      if (fadiga > 99) {fadiga = 100; }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      Kargalgan = Kargalgan + 1;
      document.getElementById("idKargalgan").innerHTML = "⚔️ Rounds da batalha: " + Kargalgan + "/1";
  
      document.getElementById("idQuadroDeRetornoKargalgan").innerHTML = 
      "✨ VITÓRIA ✨ [Recompensas: 10 ponto de experiência - 4 Pontos de Atributos - 2 Pedras de Essência]";
  
      experienciaKargalgan = experienciaKargalgan + 10;
      document.getElementById("idexperienciaKargalgan").innerHTML =  "🏆 Experiência: " + experienciaKargalgan;

      experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 10;
      document.getElementById("idContarExperienciaNoQuadroHabilidades",).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;
  
      document.getElementById("idLutaContraKargalganBotao").innerHTML = "Lutar novamente";
  
      atributo = atributo + 4;
      document.getElementById("idatributo").innerHTML =  "Disponíveis: " + atributo;
      document.getElementById("idAlertaNoMenuAtributos").innerHTML = "⚠️ Atributos";

      PedraDeEssencia = PedraDeEssencia + 2;
      document.getElementById("idpedrainventario").innerHTML =  "⚠️ Pedras de Essência: " + PedraDeEssencia;
     
      SomaPedraDeEssenciaKargalgan = SomaPedraDeEssenciaKargalgan + 2;
      document.getElementById("idPedrasDeEssenciaKargalgan").innerHTML = "💎 Pedras de Essência: " + SomaPedraDeEssenciaKargalgan;
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML = "⚠️ Inventário";
     

      /*Início do título Aquele que superou a Adversidade*/
  if (TituloAdversidadeEstaEmUso === 1){
   
    mana = mana + 30;

    if (mana > AumentoDoNivelDaMana) { mana = AumentoDoNivelDaMana; }

    document.getElementById("idAumentoDoNivelDaMana").innerHTML =  "🪄 Mana: " + mana + "%/" + AumentoDoNivelDaMana + "%";
      progresso3.setAttribute("style", "width: " + mana + "%");
      alert("Você ganhou 30% de mana referente ao Título: Aquele que Superou a Adversidade");
    
  }
  /*Fim do título Aquele que superou a Adversidade*/
  
       /* Início do remover a Sombra do Igris*/
    if (SombraIgris === 1){
      SombraIgris = 0;
      document.getElementById("idRetornoExtracao1").innerHTML = "";
      document.getElementById("idChecDoIgris").innerHTML = "Igris - O Vermelho-Sangue";

      agilidade = agilidade - 100;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisAgilidade").innerHTML = "";
      document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

      forca = forca - 120;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisForca").innerHTML = "";
      document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

      percepcao = percepcao - 80;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisPercepcao").innerHTML = "";
      document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

      inteligencia = inteligencia - 60;
      document.getElementById("idPontosExtrasDosSoldadosDasSombrasIgrisInteligencia").innerHTML = "";
      document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

      }
 /* Fim do remover a Sombra do Igris*/

 /* Início do remover a Sombra dos Magos*/
if (SombraMago >= 1 && SombraMago <= 6) {
  const atributos = {
    agilidade: [24, 48, 72, 96, 120, 144],
    forca: [23, 46, 69, 92, 115, 138],
    percepcao: [14, 28, 42, 56, 70, 84],
    inteligencia: [11, 22, 33, 44, 55, 66]
  };

  agilidade -= atributos.agilidade[SombraMago - 1];
  forca -= atributos.forca[SombraMago - 1];
  percepcao -= atributos.percepcao[SombraMago - 1];
  inteligencia -= atributos.inteligencia[SombraMago - 1];

  document.getElementById("idRetornoExtracaoMagos").innerHTML = "";
  document.getElementById("idChecDosMagos").innerHTML = "6 Magos das Sombras";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosAgilidade").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosForca").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosPercepcao").innerHTML = "";
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasMagosInteligencia").innerHTML = "";

  document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
  document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  SombraMago = 0;
}
/* Fim do remover a Sombra dos Magos*/

 /* Início do remover a Sombra do Tank*/
 if (SombraTank === 1){
  SombraTank = 0;
  document.getElementById("idRetornoExtracaoTank").innerHTML = "";
  document.getElementById("idChecDoTank").innerHTML = "Tank - Urso de gelo escuro";

  agilidade = agilidade - 48;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankAgilidade").innerHTML = "";
  document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

  forca = forca - 46;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankForca").innerHTML = "";
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

  percepcao = percepcao - 28;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankPercepcao").innerHTML = "";
  document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

  inteligencia = inteligencia - 22;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasTankInteligencia").innerHTML = "";
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  }
/* Fim do remover a Sombra do Tank*/

 /* Início do remover a Sombra do Iron*/
 if (SombraIron === 1){
  SombraIron = 0;
  document.getElementById("idRetornoExtracaoIron").innerHTML = "";
  document.getElementById("idChecDoIron").innerHTML = "Iron - Caçador Rank A";

  agilidade = agilidade - 90;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronAgilidade").innerHTML = "";
  document.getElementById("idagilidade").innerHTML =  "🦵 Agilidade: " + agilidade;

  forca = forca - 140;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronForca").innerHTML = "";
  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

  percepcao = percepcao - 70;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronPercepcao").innerHTML = "";
  document.getElementById("idpercepcao").innerHTML =  "👀 Percepção: " + percepcao;

  inteligencia = inteligencia - 40;
  document.getElementById("idPontosExtrasDosSoldadosDasSombrasIronInteligencia").innerHTML = "";
  document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;

  }
/* Fim do remover a Sombra do Iron*/

/*Início do remover a habilidade Provocar*/
  
  if (Provocar === 1) {

      Provocar = 0;
      
  
    agilidade = agilidade - 40;
    percepcao = percepcao - 10;
    document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
    document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
  
    document.getElementById("idRetornoProvocarNoStatus").innerHTML = "";
    document.getElementById("idRetornoProvocarNoStatus2").innerHTML = "";
  
    document.getElementById("idCheckProvocar").innerHTML = "Habilidade: Provocar";
    document.getElementById("idRetornoProvocar").innerHTML = "";
  }
  /* Fim do remover a habilidade Provocar*/

   /*Início de remover a habilidade Fortalecimento*/
    if (Fortalecimento === 1) {

        Fortalecimento = 0;
        
        agilidade = agilidade - 10;
        forca = forca - 10;
        percepcao = percepcao - 10;
        inteligencia = inteligencia - 10;
        document.getElementById( "idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
        document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
        document.getElementById("idpercepcao").innerHTML = "👀 Percepção: " + percepcao;
        document.getElementById("idinteligencia").innerHTML = "🧠 Inteligência: " + inteligencia;
    
        document.getElementById("idRetornoFortalecimentoNoStatus").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus2").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus3").innerHTML = "";
        document.getElementById("idRetornoFortalecimentoNoStatus4").innerHTML = "";
        document.getElementById("idCheckFortalecimento").innerHTML = "Habilidade: Fortalecimento";
        document.getElementById("idRetornoFortalecimento").innerHTML = "";  
    }
    /* Fim de remover a habilidade Fortalecimento */

  /* Início de remover Arrancada*/
  if (Arrancada === 1){
  
  Arrancada = 0;
  
  if (ArrancadaNivel2 === 0){
  agilidade = agilidade - 10;
  }
  if (ArrancadaNivel2 === 1){
  agilidade = agilidade - 20;
  }
  
   document.getElementById("idagilidade").innerHTML =
        "🦵 Agilidade: " + agilidade;
  
        document.getElementById("idCheckArrancada").innerHTML = "Habilidade: Arrancada";
        document.getElementById("idRetornoArrancada").innerHTML = "";
        document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";
  
  }
  /* Fim de remover Arrancada*/
  
  /* Início de remover Intenção Assassina */
  if (Assassina === 1){
  
  Assassina = 0;
      agilidade = agilidade - 5;

      document.getElementById("idagilidade").innerHTML = "🦵 Agilidade: " + agilidade;
      document.getElementById("idCheckAssassina").innerHTML =  "Habilidade: Arrancada";
      document.getElementById("idRetornoAssassina").innerHTML = "";
      document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";
  
  }
  /*Fim de remover Intenção Assassina*/
  
  /* Início de remover Furtividade */
  if (Furtividade === 1){
  
    Furtividade = 0;
    
    agilidade = agilidade - 30;
    
     document.getElementById("idagilidade").innerHTML =
          "🦵 Agilidade: " + agilidade;
    
    document.getElementById("idCheckFurtividade").innerHTML = "Habilidade: Furtividade";
    document.getElementById("idRetornoFurtividade").innerHTML = "";
    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";
    
    }
    /*Fim de remover Furtividade*/

      /* início da função subir de nível */
  
      SomaDoNivel = SomaDoNivel + 5;
      if (SomaDoNivel > SomaDoIndicadorDoNivel) {
        document.getElementById("idnivel").innerHTML =
          "Nível: " + EqualizadoDoNivel;
  
        alert("Level Up");
  
        EqualizadoDoNivel = EqualizadoDoNivel + 1;
        SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
      }
      /* Fim da função subir de nível */

     
    } 
    
    else {
      vida = vida - 50;
      if (vida < 1) {
        vida = 0;
      }
      progresso2.setAttribute("style", "width: " + vida + "%");
      document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";
  
      fadiga = fadiga + 60;
      if (fadiga > 99) {
        fadiga = 100;
      }
      progresso.setAttribute("style", "width: " + fadiga + "%");
      document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";
  
      document.getElementById("idQuadroDeRetornoKargalgan").innerHTML =
        "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";
  
      document.getElementById("idLutaContraKargalganBotao").innerHTML =
        "Tentar novamente";
    }
  }

   /*FIM DA LUTA DO Kargalgan*/



   

    




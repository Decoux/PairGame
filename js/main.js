//fonction onclick sur div
  //retourne la 1er carte
  //stock dans une variable
  //si la 1er variable exite on stock dans une 2e variable

//fontction comparer les 2 variables

  var global_card = document.getElementsByClassName("cart");



  var global_data = {
    first_card_value: "",
    second_card_value: "",
    first_card_id: "",
    second_card_id: "",
    tab_id_win: []
  }

  function return_cart(button_cart){

    if (! global_data.first_card_value) {
      global_data.first_card_value = button_cart.getAttribute("valeur");
      button_cart.innerHTML = global_data.first_card_value;
      global_data.first_card_id = button_cart.id;


    }
    else {
      global_data.second_card_value = button_cart.getAttribute("valeur");
      button_cart.innerHTML = global_data.second_card_value;
      global_data.second_card_id = button_cart.id;
      setTimeout(function(){ compare(); }, 700);
    }
  }

  function compare(){

    if (global_data.first_card_value == global_data.second_card_value) {
      global_data.tab_id_win.push(global_data.first_card_id);
      global_data.tab_id_win.push(global_data.second_card_id);

      if (global_data.tab_id_win.length-1 == global_card.length) {
          document.getElementById('win').style.display = "block";
      }
    }

    else {

      document.getElementById(global_data.first_card_id).innerHTML = "";
      document.getElementById(global_data.second_card_id).innerHTML = "";
    }
    global_data.first_card_value="";
    global_data.second_card_value="";
  }

  function restart(){
    
    global_data.first_card_value="";
    global_data.second_card_value="";
  }

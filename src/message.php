<?php
 $emailTo = "katalina.nadasi@gmail.com";
  // trim() function strips any white space from beginning and end of the string
  $email = filter_var(trim($_POST["formEmail"]), FILTER_SANITIZE_EMAIL);
  //  strip_tags() function strips all HTML and PHP tags from a variable.
  $message = strip_tags($_POST["formMessage"]);

  $array = array("name" => "", "email" => "", "phone" => "", "message" => "", "firstnameError" => "", "nameError" => "", "emailError" => "", "phoneError" => "", "messageError" => "", "isSuccess" => "false");
  $emailTo = "katalina.nadasi@gmail.com";

  if ($_SERVER["REQUEST_METHOD"] == "POST")
  {
    $array ["firstname"] = verifyInput($_POST["firstname"]);
    $array ["name"] = verifyInput($_POST["name"]);
    $array ["email"] = verifyInput($_POST["email"]);
    $array ["phone"] = verifyInput($_POST["phone"]);
    $array ["message"] = verifyInput($_POST["message"]);
    $array ["isSuccess"] = true;
    $emailText = "";


    if(empty($array["firstname"]))
    {
      $array ["firstnameError"] = "Quel est ton prénom ?";
      $array ["isSuccess"] = false;
    }
    else{
      $emailText .="FirstName: {$array['$firstname']}\n";
    }


    if(empty($array ["name"]))
    {
      $array ["nameError"] = "Quel est ton nom ?";
      $array ["isSuccess"] = false;
    }
    else {
      $emailText .="Name: {$array['$name']}\n";
    }

    if(!isEmail($array ["email"]))
    {
      $array ["emailError"] = "Email invalide :(";
      $array ["isSuccess"] = false;
    }
    else
    {
      $emailText .= "Email: {$array['email']}\n";
    }

    if(empty($array ["message"]))
    {
      $array ["messageError"] = "Aucun message affiché";
      $array ["isSuccess"] = false;
    }
    else {
      $emailText .="Message: {$array['$message']}\n";
    }

    if(!isPhone($array ["phone"]))
    {
      $array ["phoneError"] = "Que des chiffres et des espaces";
      $array ["isSuccess"] = false;
    }
    else {
      $emailText .="Phone: {$array['$phone']}\n";
    }
    if($array ["isSuccess"])
    {
      $headers = "From: {$array['$firstname']} {$array['$name']} <{$array['$email']}>\r\nReply-To: {$array['$email']}";
      mail($emailTo, "un message de votre site internet", $emailText, $headers);
    }

    echo json_encode($array);
  }

  function isPhone($phone)
  {
    return preg_match("/^[0-9 ]*$/", $phone);
  }

  function isEmail($email)
  {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
  }

  function verifyInput($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    return $data;

  }

?>

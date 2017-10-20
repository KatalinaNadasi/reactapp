<?php
 $emailTo = "katalina.nadasi@gmail.com";
  // trim() function strips any white space from beginning and end of the string
  $email = filter_var(trim($_POST["formEmail"]), FILTER_SANITIZE_EMAIL);
  //  strip_tags() function strips all HTML and PHP tags from a variable.
  $message = strip_tags($_POST["formMessage"]);

  $array = array("name" => "", "email" => "", "subject" => "", "message" => "", "nameError" => "", "emailError" => "", "subjectError" => "", "messageError" => "", "isSuccess" => "false");


  if ($_SERVER["REQUEST_METHOD"] == "POST")
  {
    $array ["name"] = verifyInput($_POST["name"]);
    $array ["email"] = verifyInput($_POST["email"]);
    $array ["subject"] = verifyInput($_POST["subject"]);
    $array ["message"] = verifyInput($_POST["message"]);
    $array ["isSuccess"] = true;
    $emailText = "";

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

    if(!isPhone($array ["subject"]))
    {
      $array ["subjectError"] = "Quel est le sujet du mail ?";
      $array ["isSuccess"] = false;
    }
    else {
      $emailText .="Subject: {$array['$subject']}\n";
    }
    if($array ["isSuccess"])
    {
      $headers = "From: {{$array['$name']} <{$array['$email']}>\r\nReply-To: {$array['$email']}";
      mail($emailTo, "un message de votre site", $emailText, $headers);
    }

    echo json_encode($array);
  }

  // function isPhone($phone)
  // {
  //   return preg_match("/^[0-9 ]*$/", $phone);
  // }

  function isEmail($email)
  {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
  }

  function verifyInput($formData)
  {
    $formData = trim($formData);
    $formData = stripslashes($formData);
    $formData = htmlspecialchars($formData);

    return $formData;

  }

?>

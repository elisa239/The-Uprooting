<?php
            require_once('recaptchalib.php');
            $publickey = "6Ldm4RQTAAAAABcld5nCtbGT8AhF0iNb6H3d3en1";
            $privatekey = "6Ldm4RQTAAAAAHEN1e1jQEse4MJtJBfg2VBPOOxn";
            
            # the response from reCAPTCHA
            $resp = null;
            # the error code from reCAPTCHA, if any
            $error = null;
            
            # are we submitting the page?
            if ($_POST["submit"]) {
              $resp = recaptcha_check_answer (
                $privatekey,
                $_SERVER["REMOTE_ADDR"],
                $_POST["recaptcha_challenge_field"],
                $_POST["recaptcha_response_field"]
              );
            
              if ($resp->is_valid) {
              echo "You got it!";
              # in a real application, you should send an email, create an account, etc
              } else {
              # set the error code so that we can display it. You could also use
              # die ("reCAPTCHA failed"), but using the error message is
              # more user friendly
              $error = $resp->error;
              }
            }
            echo recaptcha_get_html($publickey, $error);
            ?>
        
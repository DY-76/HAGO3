        // Get the modal
        var modal = document.getElementById('myModal');
        
        // Get the button that opens the modal
        var OBmodal = document.getElementById('addobjectmodal');
        //var btn = document.getElementById("myBtn");"
        var tip = document.getElementById('tip_modal_ejs');
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];                                         
        // When the user clicks on the button, open the modal 
        /*
        btn.onclick = function() {
            modal.style.display = "block";
        }
        */
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
            
        }
        
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            if (event.target == OBmodal) {
                OBmodal.style.display = "none";
                $("#DPS-tab").get(0).click();
            }
            if (event.target == tip) {
                tip.style.display = "none";
            }
        }

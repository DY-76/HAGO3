        // Get the modal
        var modal = document.getElementById('myModal');
        var lose_modal = document.getElementById('myloseModal');
        // Get the button that opens the modal
        var OBmodal = document.getElementById('addobjectmodal');
        //var btn = document.getElementById("myBtn");"
        var tipmodal = document.getElementById('tipmodal');

        // Get the <span> element that closes the modal
        
        // When the user clicks on the button, open the modal 
        /*
        btn.onclick = function() {
            modal.style.display = "block";
        }
        */
        // When the user clicks on <span> (x), close the modal
        
        
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            if (event.target == lose_modal) {
                lose_modal.style.display = "none";
            }
            if (event.target == tipmodal) {
                tipmodal.style.display = "none";
            }
            if (event.target == OBmodal) {
                OBmodal.style.display = "none";
                $("#DPS-tab").get(0).click();
            }
        }
        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
            tipmodal.style.display = "none";
        }

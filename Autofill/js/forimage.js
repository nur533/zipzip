
    $("document").ready(function () {

        $('input[type=file]').on("change", function () {

            var $files = $(this).get(0).files;

            if ($files.length) {

                // Reject big files
                if ($files[0].size > $(this).data("max-size") * 1024) {
                    console.log("Please select a smaller file");
                    return false;
                }

                // Replace ctrlq with your own API key
                var apiUrl = 'https://api.imgur.com/3/image';
                var apiKey = '80774f15d400aa0';

                var formData = new FormData();
                formData.append("image", $files[0]);
                formData.append('album', 'uoVhE5eSOTZr62a');
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": apiUrl,
                    "method": "POST",
                    "datatype": "json",
                    "headers": {
                        "Authorization": "Client-ID " + apiKey
                    },
                    "processData": false,
                    "contentType": false,
                    "data": formData,
                    beforeSend: function (xhr) {
                        console.log("Uploading");
                    },
                    success: function (res) {
                        //console.log(res.data.link);
                      //  $('body').append('<img src="' + res.data.link + '" />');
                      var myOptions = {
                          val1 : 'Picture'

                      };
                      var mySelect = $('#uploaded_url');
                      $.each(myOptions, function(val,text) {
                          mySelect.append(
                              $('<option></option>').val(res.data.link ).html(text)
                          );
                      });

                      var selectedText2 =  $('#uploaded_url option:first-child').val();
                      var selectedText3 =  $('#uploaded_url option:first-child').next().val();

                      $('[name="plink"]').val(selectedText2);

                      $('[name="slink"]').val(selectedText3);

                        // $('#newimgurl').val(res.data.link).appendTo('');
                        //  $('#plink1').val(res.data.link)[0];
                          //  $('#plink2').val(res.data.link)[1];
                    },
                    error: function () {
                        alert("Failed");
                    }
                }

                $.ajax(settings).done(function (response) {
                    console.log("Done ");
                });
            }
        });
    });

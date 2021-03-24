$(document).ready(function () {
    getAll();
    // $('p').click(function () {
    //   $(this).hide();
    // });

    // Virkede med get

    //$('#get').click(
    function getAll() {
      $.get('/api', function (data) {
        $('#beers').empty();
        $.each(data, function (i, item) {
          //alert(data[i].name);
          //alert(item.name);
          $('#beers').append(
            '<tr><td>' +
              item.name +
              '</td><td>' +
              item.brand +
              '</td><td>' +
              item.country +
              '</td></tr>'
          );
        });
        // alert('Data: ' + data[0].name + '\nStatus: ' + status);
      });
    }
    //);

    $('#send').click(function () {
      $.post(
        '/api',
        {
          name: bname.value,
          brand: brand.value,
          country: country.value,
        },
        function (data, status) {
          location.replace("/")
          console.log('Data: ' + JSON.stringify(data) + '\nStatus: ' + status);
          
        }
      );
    });
  });
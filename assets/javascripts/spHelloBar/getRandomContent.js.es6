export default function (cb) {
  const host = 'http://dmgeek.com';

  $.ajax({
    type: 'POST',
    url: `${host}/user/admin-ajax.php`,
    data: {
      action: 'get_random_hello_bar',
      rand: Math.random()
    },
    success: function(data, textStatus, XMLHttpRequest) {
      $("body").prepend(data);
      cb();
    }
  });
}

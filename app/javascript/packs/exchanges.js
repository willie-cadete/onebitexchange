
function exchange_request() {

  const source_currency = document.getElementById('source_currency').value
  const target_currency = document.getElementById('target_currency').value
  const amount = document.getElementById('amount').value

  fetch(`/convert?source_currency=${source_currency}&amount=${amount}&target_currency=${target_currency}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').value = parseFloat(data.value).toFixed(2)
  })

}

document.addEventListener('turbolinks:load', function(){

    document.getElementById('amount').addEventListener('keyup', function(event){
      exchange_request()
    })

    document.getElementById('amount').addEventListener('change', function(event){
      exchange_request()
    })

    document.getElementById('source_currency').addEventListener('change', function(event){
      exchange_request()
    })

    document.getElementById('target_currency').addEventListener('change', function(event){
      exchange_request()
    })

})
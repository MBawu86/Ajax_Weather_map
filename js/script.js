console.log("It's working!")
function handleGetData(event){
  event.preventDefault();
  // Load in the value of the search textbox:
  const searchText = $("#search").val()
  $.ajax({url: `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=imperial&appid=291d494626dfaaa5924f682262efd3d7
  `})
    .then(
      (data) => {
        console.log(data);
        $("#weatherFor").text(data.name)
        $("#temperature").text(data.main.temp)
        $("#feelsLike").text(data.main.feels_like)
        $("#weather").text(data.weather[0].description)
      },
      (error) => {
        console.log("bad request: ", error)
      }
    )
}
$('form').on("submit", handleGetData)

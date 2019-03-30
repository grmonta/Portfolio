//store the html elements in variables

const submitButton = $('button');

const imagesContainer = $('image-container');

const userInput = $('input');
var query = userInput;
var apiUrl = 'http://api.giphy.com/v1/gifs/search?q=';

var apiKey = '&api_key=o6jR0d6V83V4xmu92ncRlhXtXdnuet66';
var endParam = '&limit=12';
//gett he serach input

$('button').click(onChanges);
//get the data

$('input').change(onChanges);
// add handler do function on search button

//
function onChanges() {
  //  http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=o6jR0d6V83V4xmu92ncRlhXtXdnuet66

  const url = apiUrl + userInput.val() + apiKey + endParam;

  const dataCall = $.get({
    url: url,
    success: function(result) {
      let data = result.data;
      let output = '';
      for (var index in data) {
        var gifObject = data[index];
        var gifURL = gifObject.images.original.url;

        output += `<div class="col-sm-4 "><img class="img-thumbnail m-1 p-1" width='200px' height='200px' src="${gifURL}" alt="Thumbnail image"></div>
                    `;
      }
      $('.row').html(output);
    },
    error: function(error) {
      console.log(error);
    }
  });

  //for each image assign it's data[i].images.downsized.url

  //trigger the database
}

  $('#saveStringForm').on('submit', function(){
    stringToSave = $('#stringInput').val();
    if(stringToSave == ""){
      $('#status').text('Please enter a string');
    }else{
      $('#status').text('Saving string...');
      BL.createContent(stringToSave, function(){
        $('#status').text('');
        addToContentList(stringToSave);
      });
    }
    return false;
  });

  
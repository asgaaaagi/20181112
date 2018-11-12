var xhr = new XMLHttpRequest();
xhr.open('get',"https://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery",true);
xhr.send();
xhr.onload = function(){

  var data = JSON.parse(xhr.responseText);
  var str = ''; 
  var ZipName = document.getElementById('ZipName');
  var InformDesc = document.getElementById('InformDesc');
  var allZipName = {}; 
  var allInformDesc = {};
  var opt;
  
   
  for(var i = 0; i < data.length; i++){
    var ZipNameContent = data[i].ZipName_;
    var InformDescContent = data[i].InformDesc_;
    
  if(allZipName[ZipNameContent] == undefined){
      allZipName[ZipNameContent] = 1;
      opt = document.createElement('opt');
      opt.value = data[i].ZipName_;
      opt.text = data[i].ZipName_;
      ZipName.add(opt);
    }else
    {
      allZipName[ZipNameContent] += 1;
    }
  
  if(allInformDesc[InformDescContent] == undefined){
      allInformDescc[InformDescContent] = 1;
      opt = document.createElement('opt');
      opt.value = data[i].InformDesc_;
      opt.text = data[i].InformDesc_;
      InformDesc.add(opt);
    }else
    {
      allInformDesc[InformDescContent] += 1;
    }
  }
  
  document.querySelector('.allZipName').textContent = '全部違規有' + Object.keys(allZipName).length + '處';
  
  ZipName.addEventListener('change',function(e){
    InformDesc.addEventListener('change',function(e){
     var vZipName =ZipName_.value;
     var vInformDesc = InformDesc_.value;
      for(var i = 0; i < data.length; i++){  
    
      if(data[i].ZipName_ == vaddress && data[i].InformDesc_ == vInformDesc){
        str+= '<li>'+地點+data[i].ZipName_+'</li>';
        str+=報案狀況+data[i].InformDesc_;
      }
    }
    document.querySelector('.list').innerHTML = str;
        })
  })
};  
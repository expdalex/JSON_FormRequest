function requestJSONPOST(form, request){
		
		// form = document.getElementById('id') or other - DOM form
		// request = new XMLHttpRequest() - XMLHttpRequest object instance
		
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);
        
        let obj = {};

        formData.forEach(function(value, key){ //перевод данных из formData в объект ключ-значение
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);
    }
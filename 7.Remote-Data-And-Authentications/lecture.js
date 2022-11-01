//*Sending Data
    //?-The client can send data to the server,ususally via POST request
        // const data = {title:'First Post',content:'Hello,Server!'};

        // fetch('/articles',{
        //     method: 'post',
        //     headers: { 'Content-type': 'application/json' },
        //     body: JSON.stringify(data),

        // });
    //?-This allows:
        //?-Specialized requests,such as filtering collections

//*Request Options
    //?- Provide an options obecjt to Fetch API to send data:
        //? method - can be POST,PUT,PATCH or DELETE
        //? body - contains the data to be sent,usually as JSON string
        //? headers - common headers include:
            //? Content-Type - specifies the format of the data(manual)
            //? Content-Length specifies the size of the data(automatic)
            //?Cookie can be used with authentication(automatic)
            //?Custom authorization headers (manual)
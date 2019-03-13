module.exports = {
    getData: function () {
        //promise写法
        // let p = new Promise( (resolve, reject) => {
        //     $.ajax({
        //         url: '/api/index',
        //         type: 'get',
        //         data: {
        //             //CategoryCode: subjectId
        //             // Uid: topicId
        //         },
            
        //     })
        //     .then(function(res){
        //         console.log('then  then then')
        //         console.log(res)
        //         resolve(res)
        //     })
            
        //  });
        // return p;

        
        //ajax写法
        return  $.ajax({
            url: '/api/index',
            type: 'get',
            data: {
                //CategoryCode: subjectId
                // Uid: topicId
            }
        
        })

    }
}
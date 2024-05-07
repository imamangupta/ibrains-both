const Post = require('../../models/post');



exports.getPost = async (req, res) => {


    try {
        // const length = req.header('length');
     
     
        const user = await Post.find().sort().limit(10)
        res.send(user)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }

};

exports.getaginPost = async (req, res) => {


    try {
        const length = req.header('length');
     
     
        const user = await Post.find().sort().limit(length*10)
        res.send(user)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }

};


exports.addPost = async (req, res) => {

    const { name, dis, url } = req.body
    try {
        const user = await Post.create({
            postName: name,
            discription: dis,
            url: url,
        })
    
        res.json({user})

    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }

};






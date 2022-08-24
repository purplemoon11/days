const express = require('express')
const blog = require('../blogs/blog')
const router = express.Router()

router.get('/getData', (req, res)=>{
    res.send(blog)
})

router.get('/retriveData/:id', (req, res)=>{
    const data = blog.filter((insideBlog)=>insideBlog.id === Number(req.params.id))
    res.status(200).send(data)
})

router.post('/postData', (req, res)=>{
    const postData = ({
        id: req.body.id,
        title: req.body.title,
        body: req.body.body
    })
    blog.push(postData)
    res.send(postData)
})

router.put('/updateData/:id', (req, res)=>{
    id = req.params.id-1
    if(blog[id]){
        blog[id].id = req.body.id
        blog[id].title = req.body.title
        blog[id].body = req.body.body

        res.status(200).send(blog)
    }
    else{
        res.status(400).send({message: "Sorry! Something went wrong."})
    }
})

router.delete('/deleteData/:id', (req, res)=>{
    id = req.params.id
    const deleteData = blog.filter((blog)=>blog.id !== Number(req.params.id))
    res.status(200).send({message: "Data deleted", data: deleteData})
})

module.exports = router

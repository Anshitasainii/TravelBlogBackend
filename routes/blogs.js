import express from "express";
const router = express.Router()
import blog from "../modals/blog.js"



// ___________________________ GET API DATA ___________________________
router.get("/all", async (req, res) => {
    const blogData = await blog.find();
    res.status(200)
    res.send(blogData)
})


// ******** individual id  ******** 
router.get("/all/:id", async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const blogData = await blog.findById({ _id: id });
        console.log(blogData)

        if (!blogData) {
            return res.status(404).send();
        } else {
            res.send(blogData)
        }

    } catch (e) {
        console.log(e)
    }
})
// ******** individual id  ******** 

// ___________________________ GET API DATA ___________________________



// ___________________________ POST API DATA ___________________________
router.use(express.json());

router.post("/create", (req, res) => {
    const blogData = new blog(req.body)
    console.log(blogData)
    blogData.save().then(() => {
        res.status(201)
        res.send("Successfully Created new blog")
    }).catch((e) => {
        res.status(400)
        res.send(e);
    })
})
// ___________________________ POST API DATA ___________________________



// ___________________________ PATCH API DATA ______________________


router.patch("/all/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id)
        const updateBlog = await blog.findByIdAndUpdate({ _id: _id }, req.body, {
            new: true,
        });
        res.send(updateBlog)
    } catch (e) {
        res.status(404)
        res.send(e)
    }
})
// ___________________________ PATCH API DATA ___________________________


// ___________________________ Delete API DATA ___________________________

router.delete("/all/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteBlog = await blog.findByIdAndDelete({ _id: _id });
        if (!_id) {
            return res.status(400).send()
        } else {
            res.send(deleteBlog)
        }
    } catch (e) {
        res.status(500).send(e)
    }
})
// ___________________________ Delete API DATA ___________________________



export default router
const express=require('express')
const router=express.Router();


// router.get('/',getAllUsers());
router.post('/',createUser());
// router.get('/:id',getUserById());
// router.put('/:id',updateUser());
// router.delete('/:id',deleteUser());

module.exports=router;

import User from '../model/userModel.js';

//Metodo (POST)
export const createUser = async(req, res) => {
    try {
        const userDate = new User(req.body);
        const {email} = userDate;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exist"});
        }
        const saveUser = await userDate.save();
        res.status(200).json(saveUser);
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}

//Metodo (GET)
export const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        if(users.length === 0){
            return res.status(404).json({message:"User no found"});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}

//Metodo (PUT)
export const updateUser = async(req, res) => {
    try {
        const idUser = req.params.id;
        const userExist = await User.findOne({_id:idUser});
        if(!userExist){
            return res.status(404).json({message:"User no found"});
        }
        const userUpdate = await User.findByIdAndUpdate(idUser, req.body, {new:true});
        res.status(200).json(userUpdate);
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}

//Metodo (DELETE)
export const deleteUser = async(req, res) => {
    try {
        const idUser = req.params.id;
        const userExist = await User.findOne({_id:idUser});
        if(!userExist){
            return res.status(404).json({message:"User no found"});
        }
        await User.findByIdAndDelete(idUser);
        res.status(201).json({message:"User delete Success"});
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}
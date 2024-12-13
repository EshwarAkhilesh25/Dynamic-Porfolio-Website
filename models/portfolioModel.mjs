import mongoose from "mongoose";


const introSchema = new mongoose.Schema({
    welcomeText:{
        type: String,
        required:true,
    },
    firstName:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    lottieUrl:{
        type: String,
        required: true,
    },

});

const aboutSchema = new mongoose.Schema({

   description:{
        type: String,
        required: true,
   },
   skills:{
    type:Array,
    required:true,
   }
});
const educationSchema = new mongoose.Schema({
 
    title:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
   description:{
        type: String,
        required: true,
   },

});
const experienceSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true,
    },
    period:{
        type: String,
        required: true,
    },
    description1:{
        type: String,
        required: true,
    },
    description2:{
        type: String,
        required: true,
    },
    lottieUrl:{
        type: String,
        required: true,
    },
});

const skillsSchema =new mongoose.Schema({
    
    skill:{
        type:Array,
        required: true,
    },

})

const projectsSchema =new mongoose.Schema({
    // des1:{
    //     type:String,
    //     required: true,
    // },
    projecttitle:{
        type:String,
        required: true,
    },
    projectdes:{
        type:String,
        required: true,
    },
    techstack:{
        type:Array,
        required:true,
    },
    image:{
        type:String,
        required: true,
    },
    link:{
        type:String,
        required: true,
    },

})

const contactSchema =new mongoose.Schema({
    
    name:{
        type:Array,
        required: true,
    },
    age:{
        type:Array,
        required: true,
    },
    gender:{
        type:Array,
        required: true,
    },
    email:{
        type:Array,
        required: true,
    },
    mobile:{
        type:Array,
        required: true,
    },
    
    address:{
        type:Array,
        required: true,
    },
    lottieUrl:{
        type: String,
        required: true,
    },

})


export const Intro = mongoose.model("intros", introSchema);
export const About = mongoose.model("abouts", aboutSchema);
export const Education = mongoose.model("education", educationSchema);
export const Experience = mongoose.model("experience", experienceSchema);
export const Skill = mongoose.model("skills", skillsSchema);
export const Project = mongoose.model("projects", projectsSchema);
export const Contact = mongoose.model("contacts", contactSchema);


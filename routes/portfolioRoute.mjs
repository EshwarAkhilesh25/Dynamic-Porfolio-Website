 import { Router } from 'express';
 import { Intro, About, Education, Experience, Skill, Project,Contact} from '../models/portfolioModel.mjs';

const router = Router();

//first api
router.get('/get-portfolio-data',async(req,res)=>{
   try{
     const intros=await Intro.find();
     const abouts=await About.find();
     const education=await Education.find();
     const experience=await Experience.find();
     const skills=await Skill.find();
     const projects=await Project.find();
     const contacts=await Contact.find();

     res.status(200).send({
      intro:intros[0],
      about:abouts[0],
      education:education,
      experience:experience,
      skills:skills,
      projects:projects,
      contacts:contacts,
     });

   }catch(error){
    console.error("Error fetching portfolio data:", error);
     res.status(500).send(error);
   }
});

export default router;
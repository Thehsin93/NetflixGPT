import OpenAI from 'openai';
import { gptkey } from './constants';


const openai = new OpenAI({
    
  apiKey:gptkey, 
  dangerouslyAllowBrowser:true// This is the default and can be omitted
});
export default openai
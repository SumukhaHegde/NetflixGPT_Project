import OpenAI from "openai";
import { openaiKey } from "../Utils/UserValidations/validateUserDetails";

const openai = new OpenAI({
  apiKey: openaiKey,
  dangerouslyAllowBrowser: true,
});

export default openai;

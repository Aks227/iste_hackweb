import React from "react";
import './Third.css';

function App() {

  return (
<div className="Thirdm" id="Thirdm">
    <div className="osh">Our Story.</div>
    <div className="Thirdmbox">
    As interns, me and my co-intern, under the guidance of our mentor, programmed a Pull-Request Reviewer, leveraging the recent breakthrough in Deep Learning Techniques and LLMs.<br></br>
    <u>Purpose and Use case: Optimize the Product Development Cycle — A Genuine Industry Problem</u>
    <div className="workflowimg">
    <img src={require("./workflow.webp")} id="wkimg"/>
    </div>
    Consider a standard Junior-Senior developer product building cycle. The junior creates a pull request, and the code is reviewed by the senior devs and the Product Manager (PM.)
While the junior devs create a pull request, they remain idle until a new task is assigned to them, and following the review, any changes that need to be made need to be re-assigned to the developers. This hinders progress on the new task, causing messy work flows.
The most obvious solution to this is to speed up the code review block of the deployment process, and that’s what we hope to achieve through our product.
<br></br><u>Solution Overview:</u><br></br>
Our Pull-Request Reviewer represents a significant leap forward in optimizing the product development cycle, specifically addressing the bottleneck in the code review process. We harnessed recent breakthroughs in Deep Learning Techniques and leveraged LLMs, with a particular focus on the powerful LLaMa-2 model.
<br></br>Leveraging Deep Learning for Efficient Code Reviews:<br></br>

Picture this: junior developers twiddling their thumbs, waiting for that elusive feedback. Traditional code reviews can be like watching paint dry. Our solution steps up to the plate with an intelligent and automated code review assistant. Thanks to the wisdom of the LLaMa-2 model, we’re not just talking about comments; we’re talking about meaningful, context-aware feedback. We did our homework, and we’re not settling for anything less than top-notch code review solutions.

<br></br>GitHub Actions Workflow Integration:<br></br>
The heart of our solution lies in the seamless integration with GitHub Actions. Upon the creation of a pull request, our automated workflow is triggered, orchestrating a series of steps to streamline the code review process.

<br></br>1.Code Difference Extraction:<br></br>
We utilize GitHub Actions to fetch the pull request and extract the code differences between the proposed changes and the main branch.
The identified differences are then stored in a dedicated file, providing a clear snapshot of the modifications.
<br></br>2. LLaMa-2 Model Utilization:<br></br>

The extracted code differences serve as input to the LLaMa-2 model, a state-of-the-art language model. Specifically, we used a quantized version of the model, the TheBloke/Llama-2–13B-chat-GGML.
The model’s deep understanding of code structures allows it to generate insightful and concise code review comments, since a considerable part of the LLaMa-2 model was trained on code.
<br></br>3. Automated Comment Submission:<br></br>

The generated code review comment is automatically submitted as a response to the pull request, providing valuable feedback to the author.
 </div>
</div>

  );
}

export default App;

function analyzeSymptoms() {

let symptoms =
document.getElementById("symptoms")
.value
.toLowerCase();

let result = "";

if(symptoms.includes("fatigue") &&
   symptoms.includes("thirst")){

result = `
<div class="risk-card high">

<h2>⚠️ Elevated Diabetes Risk</h2>

<p>Risk Score: <b>78%</b></p>

<div class="progress">
<div class="progress-fill" style="width:78%;"></div>
</div>

<p>
Possible indicators of diabetes detected.
</p>

<h3>Recommendations</h3>

<ul>
<li>💧 Stay hydrated</li>
<li>🏃 Exercise regularly</li>
<li>🥗 Reduce sugar intake</li>
<li>🩺 Consult a healthcare professional</li>
</ul>

</div>
`;
}

else if(symptoms.includes("fever") &&
        symptoms.includes("cough")){

result = `
<div class="risk-card medium">

<h2>🟠 Possible Viral Infection</h2>

<p>
Symptoms suggest a common viral infection.
</p>

<h3>Recommendations</h3>

<ul>
<li>😴 Get adequate rest</li>
<li>💧 Drink fluids</li>
<li>🌡️ Monitor temperature</li>
<li>🩺 Consult a doctor if symptoms worsen</li>
</ul>

</div>
`;
}

else if(symptoms.includes("headache")){

result = `
<div class="risk-card low">

<h2>🟢 Mild Headache Detected</h2>

<p>
Could be stress, dehydration, or lack of sleep.
</p>

</div>
`;
}
else if(
    symptoms.includes("stress") ||
    symptoms.includes("anxiety")
){

result = `
<div class="risk-card medium">

<h2>🧠 Mental Wellness Alert</h2>

<p>
You may be experiencing stress or anxiety.
</p>

<h3>Recommendations</h3>

<ul>
<li>🧘 Practice relaxation techniques</li>
<li>😴 Get adequate sleep</li>
<li>🚶 Take regular breaks and exercise</li>
<li>💬 Talk to a trusted friend or professional</li>
</ul>

</div>
`;
}

else if(
    symptoms.includes("chest pain")
){

result = `
<div class="risk-card high">

<h2>❤️ Potential Heart Health Concern</h2>

<p>
Chest pain can be serious and should not be ignored.
</p>

<h3>Recommendations</h3>

<ul>
<li>🩺 Seek medical attention immediately</li>
<li>🚑 Contact emergency services if severe</li>
<li>📋 Avoid strenuous activity</li>
</ul>

</div>
`;
}

else if(
    symptoms.includes("irregular periods") ||
    symptoms.includes("missed periods")
){

result = `
<div class="risk-card medium">

<h2>🌸 Menstrual Health Alert</h2>

<p>
Irregular periods can be caused by stress,
hormonal changes, lifestyle factors, or
other health conditions.
</p>

<h3>Recommendations</h3>

<ul>
<li>📅 Track your menstrual cycle</li>
<li>🥗 Maintain a balanced diet</li>
<li>😴 Get adequate sleep</li>
<li>🧘 Manage stress levels</li>
<li>🩺 Consult a healthcare professional if the issue persists</li>
</ul>

</div>
`;
}

else if(
    symptoms.includes("stress") ||
    symptoms.includes("anxiety") ||
    symptoms.includes("sad") ||
    symptoms.includes("depression") ||
    symptoms.includes("overthinking") ||
    symptoms.includes("panic") ||
    symptoms.includes("uneasy breathing")
){

result = `
<div class="risk-card medium">

<h2>🧠 Mental Wellness Alert</h2>

<p>
Your symptoms may indicate stress, anxiety,
or emotional distress.
</p>

<p>Risk Score: <b>65%</b></p>

<div class="progress">
<div class="progress-fill" style="width:65%; background:orange;"></div>
</div>

<h3>Recommendations</h3>

<ul>
<li>🧘 Practice mindfulness or meditation</li>
<li>😴 Maintain a healthy sleep schedule</li>
<li>🚶 Exercise regularly</li>
<li>💬 Talk to trusted friends or family</li>
<li>🩺 Seek professional help if symptoms persist</li>
</ul>

</div>
`;
}

else if(
    symptoms.includes("muscle cramps") ||
    symptoms.includes("cramps") ||
    symptoms.includes("frequent muscle cramps")
){

result = `
<div class="risk-card medium">

<h2>💪 Muscle Cramp Alert</h2>

<p>
Muscle cramps may be caused by dehydration,
muscle fatigue, electrolyte imbalance,
or prolonged physical activity.
</p>

<p>Risk Score: <b>55%</b></p>

<div class="progress">
<div class="progress-fill" style="width:55%; background:orange;"></div>
</div>

<h3>Recommendations</h3>

<ul>
<li>💧 Drink plenty of water</li>
<li>🍌 Eat foods rich in potassium and magnesium</li>
<li>🧘 Stretch the affected muscles</li>
<li>😴 Get adequate rest</li>
<li>🩺 Consult a healthcare professional if cramps are frequent or severe</li>
</ul>

</div>
`;
}

else if(
    symptoms.includes("sore throat") ||
    symptoms.includes("throat pain") ||
    symptoms.includes("dry throat")
){

result = `
<div class="risk-card medium">

<h2>🦠 Sore Throat Alert</h2>

<p>
A sore throat may be caused by a viral infection,
cold, flu, allergies, or throat irritation.
</p>

<p>Risk Score: <b>60%</b></p>

<div class="progress">
<div class="progress-fill" style="width:60%; background:orange;"></div>
</div>

<h3>Recommendations</h3>

<ul>
<li>💧 Drink warm fluids</li>
<li>🍵 Gargle with warm salt water</li>
<li>😴 Get plenty of rest</li>
<li>🌡️ Monitor for fever or worsening symptoms</li>
<li>🩺 Consult a healthcare professional if symptoms persist</li>
</ul>

</div>
`;
}


document.getElementById("result").innerHTML = result;

}

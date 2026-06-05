const dayTypes = {
  aerobic: {
    label: "Aerobic Day",
    hint: "Longer work, sustainable pace",
    options: {
      A: {
        title: "Steady Capacity Builder",
        intent: "Base",
        intensity: "RPE 5-6",
        duration: [32, 36, 40, 45],
        work: [6, 8, 10, 12],
        rest: ["2 min easy", "90 sec easy", "3 min easy"],
        rounds: [3, 4, 5],
        warmup: ["5 min easy jog", "6 min easy mixed cardio", "4 min brisk walk into easy run"],
        main: ({ rounds, work, rest }) => [`${rounds} rounds`, `${work} min smooth aerobic pace`, `${rest} between rounds`],
        closer: ["8 min easy cooldown", "5 min nasal-breathing cooldown", "10 min walk and mobility"],
        note: "Keep the pace boring in the best way. You should finish feeling like you could add one more round."
      },
      B: {
        title: "Tempo Interval Day",
        intent: "Tempo",
        intensity: "RPE 6-7",
        duration: [28, 32, 35, 38],
        work: [3, 4, 5],
        rest: ["90 sec walk", "2 min easy jog", "75 sec easy"],
        rounds: [5, 6, 7],
        warmup: ["8 min easy run plus skips", "6 min easy bike plus mobility", "5 min jog plus 4 strides"],
        main: ({ rounds, work, rest }) => [`${rounds} x ${work} min tempo`, `${rest} after each interval`, "Hold the same pace across every rep"],
        closer: ["6 min easy cooldown", "4 x 20 sec relaxed strides", "5 min walk and calf mobility"],
        note: "The win is repeatability. If rep one is heroic, rep six will collect the debt."
      },
      C: {
        title: "Mixed Aerobic Circuit",
        intent: "Circuit",
        intensity: "RPE 5-7",
        duration: [30, 34, 38, 42],
        work: [4, 5, 6],
        rest: ["1 min transition", "75 sec transition", "90 sec transition"],
        rounds: [4, 5],
        warmup: ["6 min easy cardio", "2 rounds of mobility and light carries", "5 min easy row or jog"],
        main: ({ rounds, work, rest }) => [`${rounds} rounds`, `${work} min cyclical cardio`, `${work} min loaded carry or sled push`, `${rest} between stations`],
        closer: ["5 min easy walk", "Breathing reset: 3 min easy nasal breathing", "Hip and ankle mobility"],
        note: "Choose loads that keep the session aerobic. Strong posture matters more than grinding."
      }
    }
  },
  sprint: {
    label: "Sprint Day",
    hint: "Fast reps, full recovery",
    options: {
      A: {
        title: "Acceleration Repeats",
        intent: "Power",
        intensity: "RPE 8-9",
        duration: [24, 28, 30],
        work: [10, 15, 20],
        rest: ["90 sec walk-back", "2 min rest", "2:30 rest"],
        rounds: [8, 10, 12],
        warmup: ["10 min sprint prep and drills", "8 min ramp-up plus A-skips", "6 min jog plus 4 build-ups"],
        main: ({ rounds, work, rest }) => [`${rounds} x ${work} yd acceleration`, `${rest} after each sprint`, "Start tall, drive hard, shut down cleanly"],
        closer: ["4 x 40 yd relaxed tempo", "6 min walk cooldown", "Hamstring and hip flexor mobility"],
        note: "Stop the set when speed drops. Sprint work is quality work, not survival work."
      },
      B: {
        title: "Flying Sprint Session",
        intent: "Speed",
        intensity: "RPE 9",
        duration: [26, 30, 34],
        work: [10, 15, 20],
        rest: ["2 min rest", "2:30 rest", "3 min rest"],
        rounds: [6, 7, 8],
        warmup: ["12 min sprint prep", "8 min drills plus 5 build-ups", "10 min dynamic warmup"],
        main: ({ rounds, work, rest }) => [`${rounds} flying sprints`, `${work} yd build-in, ${work} yd fly zone`, `${rest} between reps`],
        closer: ["5 min easy walk", "3 x 60 yd smooth strides", "Easy bike flush: 6 min"],
        note: "Ease into the fly zone. Chase smooth speed before max effort."
      },
      C: {
        title: "Sprint Contrast Day",
        intent: "Repeat speed",
        intensity: "RPE 8",
        duration: [25, 29, 32],
        work: [20, 25, 30],
        rest: ["60 sec after short reps, 2 min after long reps", "75 sec after short reps, 2:30 after long reps"],
        rounds: [4, 5, 6],
        warmup: ["8 min warmup plus 4 build-ups", "10 min movement prep", "6 min easy run plus skips"],
        main: ({ rounds, work, rest }) => [`${rounds} sets`, `2 x 10 yd burst then 1 x ${work} yd sprint`, `${rest}`],
        closer: ["5 min walk cooldown", "Light posterior chain mobility", "Easy tempo jog: 4 min"],
        note: "The short bursts should prime the longer rep, not drain it."
      }
    }
  },
  shuttle: {
    label: "Shuttle Day",
    hint: "Change direction and repeat",
    options: {
      A: {
        title: "Short Shuttle Engine",
        intent: "COD",
        intensity: "RPE 7-8",
        duration: [24, 28, 32],
        work: [5, 10, 15],
        rest: ["45 sec rest", "60 sec rest", "75 sec rest"],
        rounds: [8, 10, 12],
        warmup: ["8 min lateral prep", "6 min dynamic warmup plus shuffle drills", "5 min jog plus decel practice"],
        main: ({ rounds, rest }) => [`${rounds} reps of 5-10-5 shuttle`, `${rest} after each rep`, "Plant under control and accelerate out"],
        closer: ["4 min easy walk", "Adductor and calf mobility", "Easy bike: 5 min"],
        note: "Make the turn sharp, not reckless. Clean feet save energy."
      },
      B: {
        title: "Ladder Shuttle Session",
        intent: "Repeatability",
        intensity: "RPE 7",
        duration: [26, 30, 34],
        work: [10, 15, 20],
        rest: ["60 sec rest", "75 sec rest", "90 sec rest"],
        rounds: [4, 5, 6],
        warmup: ["8 min prep and lateral bounds", "6 min easy run plus cone drills", "10 min movement prep"],
        main: ({ rounds, work, rest }) => [`${rounds} rounds`, `Shuttle ${work} yd, ${work + 10} yd, ${work + 20} yd`, `${rest} between rounds`],
        closer: ["5 min walk cooldown", "Breathing reset and hips", "Easy jog: 4 min"],
        note: "Pace the first ladder so the final ladder still looks athletic."
      },
      C: {
        title: "Reactive Shuttle Builder",
        intent: "Agility",
        intensity: "RPE 7-9",
        duration: [22, 26, 30],
        work: [12, 15, 18],
        rest: ["45 sec rest", "60 sec rest", "75 sec rest"],
        rounds: [9, 10, 12],
        warmup: ["8 min warmup plus decel drills", "6 min easy cardio and lateral prep", "10 min progressive movement prep"],
        main: ({ rounds, work, rest }) => [`${rounds} reps`, `${work} sec coach-call shuttle or mirror drill`, `${rest} between reps`],
        closer: ["5 min easy cooldown", "Ankle and groin mobility", "3 min low-intensity carry"],
        note: "Use a random call, color, or hand signal. The body should solve the rep, not memorize it."
      }
    }
  },
  bike: {
    label: "Bike Erg Day",
    hint: "Low impact, high output",
    options: {
      A: {
        title: "Bike Threshold Builder",
        intent: "Threshold",
        intensity: "RPE 7",
        duration: [30, 35, 40],
        work: [4, 5, 6],
        rest: ["2 min easy spin", "90 sec easy spin", "3 min easy spin"],
        rounds: [5, 6],
        warmup: ["8 min progressive spin", "6 min easy spin plus 3 pickups", "10 min ramp-up"],
        main: ({ rounds, work, rest }) => [`${rounds} x ${work} min hard sustainable`, `${rest} after each`, "Cadence smooth, breathing controlled"],
        closer: ["6 min easy spin", "4 min nasal-breathing spin", "Quad and hip flexor mobility"],
        note: "Pick watts you can repeat. A small fade is fine; a cliff means the start was too spicy."
      },
      B: {
        title: "Bike Power Repeats",
        intent: "Power",
        intensity: "RPE 8-9",
        duration: [22, 25, 28],
        work: [20, 30, 40],
        rest: ["100 sec easy", "2 min easy", "90 sec easy"],
        rounds: [8, 10, 12],
        warmup: ["8 min easy spin plus 4 surges", "10 min progressive warmup", "6 min spin plus cadence builds"],
        main: ({ rounds, work, rest }) => [`${rounds} x ${work} sec hard`, `${rest} after each`, "Stay seated unless power clearly improves standing"],
        closer: ["6 min easy spin", "5 min very easy cooldown", "Breathing reset off bike"],
        note: "Hard means crisp power, not sloppy flailing. Let the recovery actually recover you."
      },
      C: {
        title: "Bike Aerobic Flush",
        intent: "Recovery",
        intensity: "RPE 4-6",
        duration: [25, 30, 35, 40],
        work: [2, 3, 4],
        rest: ["1 min easy", "90 sec easy", "2 min easy"],
        rounds: [6, 8, 10],
        warmup: ["5 min easy spin", "6 min progressive spin", "4 min very easy spin"],
        main: ({ rounds, work, rest }) => [`${rounds} rounds`, `${work} min moderate spin`, `${rest} between rounds`],
        closer: ["5 min easy spin", "Mobility: hips, calves, T-spine", "Walk 5 min after dismount"],
        note: "This should put you back together. Keep the legs moving and the ego parked."
      }
    }
  }
};

const state = {
  day: "aerobic",
  option: "A",
  currentSession: null,
  saved: JSON.parse(localStorage.getItem("conditioningSaved") || "[]")
};

const dayButtons = document.querySelector("#dayButtons");
const optionButtons = document.querySelector("#optionButtons");
const summaryGrid = document.querySelector("#summaryGrid");
const workoutBlocks = document.querySelector("#workoutBlocks");
const savedList = document.querySelector("#savedList");
const sessionType = document.querySelector("#sessionType");
const sessionTitle = document.querySelector("#sessionTitle");
const coachNote = document.querySelector("#coachNote");
const copyPanel = document.querySelector("#copyPanel");
const copyTextArea = document.querySelector("#copyTextArea");
const generateButton = document.querySelector("#generateButton");
const surpriseButton = document.querySelector("#surpriseButton");
const copyButton = document.querySelector("#copyButton");
const saveButton = document.querySelector("#saveButton");
const clearSavedButton = document.querySelector("#clearSavedButton");

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function createSession(dayKey = state.day, optionKey = state.option) {
  const day = dayTypes[dayKey];
  const option = day.options[optionKey];
  const variables = {
    rounds: pick(option.rounds),
    work: pick(option.work),
    rest: pick(option.rest),
    duration: pick(option.duration)
  };

  return {
    id: crypto.randomUUID(),
    dayKey,
    optionKey,
    dayLabel: day.label,
    title: option.title,
    intent: option.intent,
    intensity: option.intensity,
    duration: `${variables.duration} min`,
    blocks: [
      {
        kicker: "Warmup",
        title: "Prepare",
        items: [pick(option.warmup), "Build gradually before the first hard rep"]
      },
      {
        kicker: "Main",
        title: "Conditioning",
        items: option.main(variables)
      },
      {
        kicker: "Cooldown",
        title: "Downshift",
        items: [pick(option.closer), "Log output, pace, or how the final rep felt"]
      }
    ],
    note: option.note,
    createdAt: new Date().toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  };
}

function renderDayButtons() {
  dayButtons.innerHTML = Object.entries(dayTypes)
    .map(([key, day]) => `
      <button class="day-button" type="button" role="radio" aria-checked="${state.day === key}" data-day="${key}">
        <strong>${day.label}</strong>
        <span>${day.hint}</span>
      </button>
    `)
    .join("");
}

function renderOptionButtons() {
  optionButtons.innerHTML = ["A", "B", "C"]
    .map((key) => {
      const option = dayTypes[state.day].options[key];
      return `
        <button class="option-button" type="button" role="radio" aria-checked="${state.option === key}" data-option="${key}">
          <strong>${key}</strong>
          <span>${option.intent}</span>
        </button>
      `;
    })
    .join("");
}

function renderSession(session) {
  state.currentSession = session;
  copyPanel.hidden = true;
  copyTextArea.value = "";
  sessionType.textContent = `${session.dayLabel} / Option ${session.optionKey}`;
  sessionTitle.textContent = session.title;
  coachNote.textContent = session.note;

  const summaryItems = [
    ["Duration", session.duration],
    ["Intensity", session.intensity],
    ["Focus", session.intent],
    ["Generated", session.createdAt]
  ];

  summaryGrid.innerHTML = summaryItems
    .map(([label, value]) => `
      <div class="summary-item">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `)
    .join("");

  workoutBlocks.innerHTML = session.blocks
    .map((block) => `
      <article class="block">
        <div>
          <span class="block-kicker">${block.kicker}</span>
          <h3>${block.title}</h3>
        </div>
        <ul>
          ${block.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `)
    .join("");
}

function renderSaved() {
  if (!state.saved.length) {
    savedList.innerHTML = '<p class="empty-state">Save a session to keep it here while you keep generating.</p>';
    return;
  }

  savedList.innerHTML = state.saved
    .map((session) => `
      <article class="saved-item">
        <button type="button" data-saved-id="${session.id}">
          <strong>${session.title}</strong>
          <span>${session.dayLabel} / Option ${session.optionKey}</span>
          <span>${session.duration} at ${session.intensity}</span>
        </button>
      </article>
    `)
    .join("");
}

function persistSaved() {
  localStorage.setItem("conditioningSaved", JSON.stringify(state.saved.slice(0, 8)));
}

function plainTextSession(session) {
  const blocks = session.blocks
    .map((block) => `${block.kicker}: ${block.items.join("; ")}`)
    .join("\n");

  return `${session.dayLabel} / Option ${session.optionKey}
${session.title}
Duration: ${session.duration}
Intensity: ${session.intensity}
Focus: ${session.intent}

${blocks}

Coach note: ${session.note}`;
}

async function copyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    textarea.remove();
  }

  return copied;
}

dayButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day]");
  if (!button) return;
  state.day = button.dataset.day;
  state.option = "A";
  renderDayButtons();
  renderOptionButtons();
  renderSession(createSession());
});

optionButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-option]");
  if (!button) return;
  state.option = button.dataset.option;
  renderOptionButtons();
  renderSession(createSession());
});

generateButton.addEventListener("click", () => {
  renderSession(createSession());
});

surpriseButton.addEventListener("click", () => {
  const days = Object.keys(dayTypes);
  state.day = pick(days);
  state.option = pick(["A", "B", "C"]);
  renderDayButtons();
  renderOptionButtons();
  renderSession(createSession());
});

copyButton.addEventListener("click", async () => {
  if (!state.currentSession) return;
  const text = plainTextSession(state.currentSession);
  const copied = await copyText(text);
  copyButton.textContent = copied ? "Copied" : "Select text";
  if (!copied) {
    copyTextArea.value = text;
    copyPanel.hidden = false;
    copyTextArea.focus();
    copyTextArea.select();
  }
  window.setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 1200);
});

saveButton.addEventListener("click", () => {
  if (!state.currentSession) return;
  state.saved = [state.currentSession, ...state.saved.filter((session) => session.id !== state.currentSession.id)].slice(0, 8);
  persistSaved();
  renderSaved();
});

savedList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-saved-id]");
  if (!button) return;
  const session = state.saved.find((item) => item.id === button.dataset.savedId);
  if (!session) return;
  state.day = session.dayKey;
  state.option = session.optionKey;
  renderDayButtons();
  renderOptionButtons();
  renderSession(session);
});

clearSavedButton.addEventListener("click", () => {
  state.saved = [];
  persistSaved();
  renderSaved();
});

renderDayButtons();
renderOptionButtons();
renderSession(createSession());
renderSaved();

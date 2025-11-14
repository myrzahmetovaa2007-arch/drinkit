"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Overview of your project activity and key metrics.
        </p>
      </div>

      {/* TABS */}
      <div className="flex space-x-4 border-b pb-2">
        {["overview", "analytics", "projects", "team"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-2 text-lg capitalize transition ${
              tab === t
                ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      {tab === "overview" && <Overview />}
      {tab === "analytics" && <Analytics />}
      {tab === "projects" && <Projects />}
      {tab === "team" && <Team />}
    </div>
  );
}

/* --------------------
    OVERVIEW PAGE
-------------------- */

function Overview() {
  return (
    <div className="space-y-10">
      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: "Users", value: "1,245" },
          { label: "Revenue", value: "$8,540" },
          { label: "Active Projects", value: "12" },
          { label: "Pending Tasks", value: "27" },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <p className="text-gray-500">{card.label}</p>
            <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
          </div>
        ))}
      </div>

      {/* SIMPLE CHART (PURE CSS) */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Traffic (Last 6 months)</h2>

        <div className="flex items-end h-40 space-x-5">
          {[30, 45, 60, 40, 80, 70].map((h, i) => (
            <div key={i} className="w-10 bg-blue-500 rounded"
                 style={{ height: `${h}%` }}>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------
    ANALYTICS PAGE
-------------------- */

function Analytics() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold">Analytics</h2>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-3">User Growth</h3>
        <p className="text-gray-600 mb-4">
          The system shows growing activity over the last 3 months.
        </p>

        <div className="flex items-end h-48 space-x-6">
          {[20, 50, 80, 65, 95].map((h, i) => (
            <div key={i} className="bg-green-500 w-14 rounded" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------
    PROJECTS PAGE
-------------------- */

function Projects() {
  const projects = [
    { name: "Website Redesign", status: "In Progress", tasks: 24 },
    { name: "Mobile App", status: "Completed", tasks: 48 },
    { name: "Marketing Campaign", status: "Pending", tasks: 12 },
  ];

  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold">Projects</h2>

      <table className="w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Project</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Tasks</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.name} className="border-t">
              <td className="p-4">{p.name}</td>
              <td className="p-4">{p.status}</td>
              <td className="p-4">{p.tasks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* --------------------
    TEAM PAGE
-------------------- */

function Team() {
  const members = [
    { name: "Aiza", role: "Project Manager" },
    { name: "Bek", role: "Frontend Developer" },
    { name: "Karina", role: "UI/UX Designer" },
    { name: "Timur", role: "Data Analyst" },
  ];

  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold">Team Members</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {members.map((m) => (
          <div key={m.name} className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

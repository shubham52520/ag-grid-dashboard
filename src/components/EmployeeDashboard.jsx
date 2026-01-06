import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { employees } from "../data/employees";

const EmployeeDashboard = () => {
    const columnDefs = useMemo(() => [
        {
            headerName: "Employee",
            children: [
                { field: "firstName", filter: true },
                { field: "lastName", filter: true },
                {
                    field: "email",
                    flex: 1,
                    cellRenderer: (p) => (
                        <a href={`mailto:${p.value}`} style={{ color: "#2563eb" }}>
                            {p.value}
                        </a>
                    ),
                },
            ],
        },
        {
            headerName: "Role & Org",
            children: [
                { field: "department", filter: true },
                { field: "position", flex: 1 },
                { field: "manager" },
            ],
        },
        {
            headerName: "Performance",
            children: [
                {
                    field: "performanceRating",
                    headerName: "Rating",
                    filter: "agNumberColumnFilter",
                    cellRenderer: (p) => (
                        <span
                            style={{
                                fontWeight: 600,
                                color: p.value >= 4.5 ? "#16a34a" : "#374151",
                            }}
                        >
                            {p.value}
                        </span>
                    ),
                },
                { field: "projectsCompleted", headerName: "Projects" },
                {
                    field: "isActive",
                    headerName: "Status",
                    cellRenderer: (p) => (
                        <span
                            style={{
                                padding: "2px 8px",
                                borderRadius: 12,
                                fontSize: 12,
                                background: p.value ? "#dcfce7" : "#fee2e2",
                                color: p.value ? "#166534" : "#991b1b",
                            }}
                        >
                            {p.value ? "Active" : "Inactive"}
                        </span>
                    ),
                },
            ],
        },
        {
            headerName: "Compensation",
            children: [
                {
                    field: "salary",
                    filter: "agNumberColumnFilter",
                    valueFormatter: (p) =>
                        `$${p.value.toLocaleString()}`,
                },
                { field: "location" },
                {
                    field: "hireDate",
                    headerName: "Hire Date",
                    valueFormatter: (p) =>
                        new Date(p.value).toLocaleDateString(),
                },
            ],
        },
    ], []);

    const defaultColDef = useMemo(() => ({
        sortable: true,
        resizable: true,
        floatingFilter: true,
    }), []);

    const rows = employees;

    const stats = useMemo(() => {
        const active = rows.filter(e => e.isActive).length;

        const avgSalary =
            rows.reduce((sum, e) => sum + Number(e.salary || 0), 0) / rows.length;

        return { active, avgSalary };
    }, [rows]);

    return (
        <div style={{ padding: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 600 }}>Employee Dashboard</h2>

            {/* KPI Row */}
            <div style={{ display: "flex", gap: 16, margin: "16px 0" }}>
                <Kpi label="Total Employees" value={employees.length} />
                <Kpi label="Active Employees" value={stats.active} />
                <Kpi
                    label="Avg. Salary"
                    value={`$${Math.round(stats.avgSalary).toLocaleString()}`}
                />
            </div>

            {/* Grid */}
            <div
                className="ag-theme-quartz"
                style={{ height: 600, width: "100%" }}
            >
                <AgGridReact
                    rowData={employees}   // ✅ array
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination
                    paginationPageSize={10}
                />
            </div>
        </div>
    );
};

const Kpi = ({ label, value }) => (
    <div
        style={{
            padding: 16,
            borderRadius: 12,
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            minWidth: 160,
        }}
    >
        <div style={{ fontSize: 12, color: "#6b7280" }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 600 }}>{value}</div>
    </div>
);

export default EmployeeDashboard;

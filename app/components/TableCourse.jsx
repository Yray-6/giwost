'use client'
import React, { useState } from "react";


    const coursesData = [
        { name: "HSE LEVEL 1,2,&3", classroom: "29,999", duration: "5 DAYS" },
        { name: "DIPLOMA IN WORKPLACE HEALTH AND SAFETY", classroom: "49,999", duration: "5 DAYS" },
        { name: "ISO 45001: 2018: PRINCIPLE OF OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEM", classroom: "120,000", duration: "5 DAYS" },
        { name: "Diploma in Modern Project Management", classroom: "49,000", duration: "5 DAYS" },
        { name: "QUALITY MANAGEMENT SYSTEM (INTERNAL AUDITOR)", classroom: "120,000", duration: "5 DAYS" },
        { name: "ENVIRONMENTAL MANAGEMENT SYSTEM (ISO 14001)", classroom: "120,000", duration: "5 DAYS" },
        { name: "DIPLOMA IN HOSPITALITY MANAGEMENT", classroom: "49,999", duration: "5 DAYS" },
        { name: "ISO 22000:2018 - ELEMENTS OF FOOD SAFETY MANAGEMENT SYSTEM (FSMS)", classroom: "120,000", duration: "5 DAYS" },
        { name: "DIPLOMA IN TRANSPORT MANAGEMENT", classroom: "39,999", duration: "5 DAYS" },
        { name: "DIPLOMA IN BUSINESS ADMINISTRATION", classroom: "39,999", duration: "5 DAYS" },
        { name: "ADVANCED PROFESSIONAL DIPLOMA IN SAFETY AND SECURITY MANAGEMENT (APDSSM)", classroom: "59,999", duration: "5 DAYS" },
        { name: "CERTIFIED SAFETY MANAGER COURSE (CSMC)", classroom: "180,000", duration: "5 DAYS" },
        { name: "OIL AND GAS BUSINESS DEVELOPMENT (OGBD)", classroom: "69,999", duration: "5 DAYS" },
        { name: "INTRODUCTION TO SUBSEA OPERATION (ISO)", classroom: "120,000", duration: "5 DAYS" },
        { name: "ONSHORE/OFFSHORE RIG SAFETY (RS)", classroom: "34,999", duration: "4 DAYS" },
        { name: "GENERAL OIL AND GAS OPERATIONAL SAFETY", classroom: "49,999", duration: "4 DAYS" },
        { name: "DIPLOMA IN OPERATIONS MANAGEMENT", classroom: "49,999", duration: "4 DAYS" },
        { name: "PROJECT MANAGEMENT", classroom: "39,999", duration: "4 DAYS" },
        { name: "QUALITY ASSURANCE AND QUALITY CONTROL - QAQC", classroom: "39,999", duration: "4 DAYS" },
        { name: "INTRODUCTION TO TRAIN-THE-TRAINERS", classroom: "44,999", duration: "4 DAYS" },
        { name: "BASIC LIFE SUPPORT (BLS)", classroom: "39,999", duration: "4 DAYS" },
        { name: "WAREHOUSE MANAGEMENT", classroom: "49,999", duration: "4 DAYS" },
        { name: "INVENTORY AND QUALITY MANAGEMENT", classroom: "34,999", duration: "4 DAYS" },
        { name: "HUMAN RESOURCES MANAGEMENT", classroom: "39,999", duration: "4 DAYS" },
        { name: "CUSTOMER RELATIONSHIP MANAGEMENT - CRM", classroom: "39,999", duration: "4 DAYS" },
        { name: "PROCESS HAZARD REVIEW (HAZOP)", classroom: "49,999", duration: "4 DAYS" },
        { name: "PROCESS SAFETY (PS)", classroom: "49,999", duration: "4 DAYS" },
        { name: "HOSPITAL SAFETY (HS)", classroom: "39,999", duration: "4 DAYS" },
        { name: "MANAGEMENT OF CHANGE (MC)", classroom: "49,999", duration: "4 DAYS" },
        { name: "RADIATION SAFETY (RS)", classroom: "69,999", duration: "4 DAYS" },
        { name: "OIL AND GAS LOGISTIC MANAGEMENT (OGLM)", classroom: "69,999", duration: "4 DAYS" },
        { name: "OIL AND GAS PROJECT MANAGEMENT (OGPM)", classroom: "69,999", duration: "4 DAYS" },
        { name: "OIL AND GAS BUSINESS MANAGEMENT (OGBM)", classroom: "69,999", duration: "4 DAYS" },
        { name: "RIGGING AND SLINGING (RS)", classroom: "59,999", duration: "4 DAYS" },
        { name: "OIL AND GAS CONTRACT PACKAGING AND BIDDING (OGCPB)", classroom: "120,000", duration: "4 DAYS" },
        { name: "OIL AND GAS RIG SAFETY (OGRS)", classroom: "59,999", duration: "4 DAYS" },
        { name: "INTRODUCTION TO DRILLING AND WELL CONTROL (IDWC)", classroom: "79,999", duration: "4 DAYS" },
        { name: "ONSHORE/OFFSHORE DRILLING HSE SUPERVISOR (ODHS)", classroom: "69,999", duration: "4 DAYS" },
        { name: "BASIC DRILLING AND WELL COMPLETION (BDWC)", classroom: "69,999", duration: "4 DAYS" },
        { name: "SAFETY AND SECURITY MANAGEMENT (SSM)", classroom: "59,999", duration: "4 DAYS" },
        { name: "ENVIRONMENTAL WASTE MANAGEMENT (EWM)", classroom: "49,999", duration: "4 DAYS" },
        { name: "ENVIRONMENTAL AWARENESS (EA)", classroom: "39,999", duration: "4 DAYS" },
        { name: "ADVANCE HSE SUPERVISOR LEVEL", classroom: "24,999", duration: "3 DAYS" },
        { name: "CONSTRUCTION SAFETY (CS)", classroom: "34,999", duration: "3 DAYS" },
        { name: "MARINE SAFETY (MS)", classroom: "39,999", duration: "3 DAYS" },
        { name: "UNSAFE ACT AUDITING (UAA)", classroom: "29,999", duration: "3 DAYS" },
        { name: "FUNDAMENTALS OF HEALTH AND SAFETY IN THE WORKPLACE", classroom: "39,000", duration: "3 DAYS" },
        { name: "SUPPLY CHAIN MANAGEMENT", classroom: "39,999", duration: "3 DAYS" },
        { name: "FUNDAMENTALS OF SALES MANAGEMENT", classroom: "39,999", duration: "3 DAYS" },
        { name: "HAZARD RECOGNITION AND RISK ASSESSMENT", classroom: "29,999", duration: "3 DAYS" },
        { name: "ALTERNATIVE DISPUTE RESOLUTION", classroom: "39,999", duration: "3 DAYS" },
        { name: "TIME MANAGEMENT", classroom: "39,999", duration: "3 DAYS" },
        { name: "CONFLICT MANAGEMENT", classroom: "39,999", duration: "3 DAYS" },
        { name: "RIGGERS SAFETY (RS)", classroom: "29,999", duration: "3 DAYS" },
        { name: "WORKING AT HEIGHT SAFETY (WHS)", classroom: "29,999", duration: "3 DAYS" },
        { name: "CRANE SAFETY (CS)", classroom: "34,999", duration: "3 DAYS" },
        { name: "LABORATORY SAFETY (LS)", classroom: "34,999", duration: "3 DAYS" },
        { name: "INSPECTION OF LIFTING EQUIPMENT (ILE)", classroom: "59,999", duration: "3 DAYS" },
        { name: "AVIATION FUEL HANDLING AND SAFETY (AFHS)", classroom: "130,000", duration: "3 DAYS" },
        { name: "HSE IN CONTRACT MANAGEMENT (HCM)", classroom: "110,000", duration: "3 DAYS" },
        { name: "SCAFFOLD SAFETY (SS)", classroom: "39,999", duration: "3 DAYS" },
        { name: "WORKSHOP AND WAREHOUSE SAFETY (WWS)", classroom: "39,999", duration: "3 DAYS" },
        { name: "FIRE WATCH MAN (FWM)", classroom: "49,999", duration: "3 DAYS" },
        { name: "FIRE TEAM LEADER (FTL)", classroom: "39,999", duration: "3 DAYS" },
        { name: "FOOD SAFETY AND HYGIENE (LEVEL 1-3 (FSH)", classroom: "39,999", duration: "3 DAYS" },
        { name: "GENERAL OIL AND GAS OPERATION (GOGP)", classroom: "69,999", duration: "3 DAYS" },
        { name: "RIGGING AND FALL PROTECTION (RFP)", classroom: "49,999", duration: "3 DAYS" },
        { name: "OIL AND GAS HAZARD AWARENESS (OGHA)", classroom: "49,999", duration: "3 DAYS" },
        { name: "OIL AND GAS RISK MANAGEMENT", classroom: "59,999", duration: "3 DAYS" },
        { name: "OIL AND GAS SUPPLY DISTRIBUTION (OGSD)", classroom: "90,000", duration: "3 DAYS" },
        { name: "VALUE CREATION IN PROCUREMENT (VCP)", classroom: "140,000", duration: "3 DAYS" },
        { name: "MAINTENANCE PLANNING AND SCHEDULING (MPS)", classroom: "140,000", duration: "3 DAYS" },
        { name: "ONSHORE/OFFSHORE BASIC RIG OPERATION (OBRO)", classroom: "59,999", duration: "3 DAYS" },
        { name: "EMERGENCY RESPONSE PLAN (ERP)", classroom: "49,999", duration: "3 DAYS" },
        { name: "HELICOPTER LANDING OFFICER (HLO)", classroom: "59,999", duration: "3 DAYS" },
        { name: "OFFSHORE SAFETY ORIENTATION (OSO)", classroom: "59,999", duration: "3 DAYS" },
        { name: "SANDBLASTING (SB)", classroom: "150,000", duration: "3 DAYS" },
        { name: "PAINTING AND SANDBLASTING (PB)", classroom: "240,000", duration: "3 DAYS" },
        { name: "STOREKEEPING AND WAREHOUSE MANAGEMENT (SWM)", classroom: "39,999", duration: "3 DAYS" },
        { name: "ENVIRONMENTAL IMPACT ASSESSMENT (EIA)", classroom: "39,999", duration: "3 DAYS" },
        { name: "BASIC OFFSHORE SAFETY INDUCTION AND EMERGENCY TRAINING - BOSIET", classroom: "220,000", duration: "3 DAYS" },
        { name: "FOOD HANDLING SAFETY (FHS)", classroom: "29,999", duration: "2 DAYS" },
        { name: "BASIC FIRE SAFETY (BFS)", classroom: "24,999", duration: "2 DAYS" },
        { name: "FIRST AID/CPR", classroom: "29,999", duration: "2 DAYS" },
        { name: "CHEMICAL SAFETY (CS)", classroom: "24,999", duration: "2 DAYS" },
        { name: "HELICOPTER UNDERWATER ESCAPE TRAINING - HUET", classroom: "59,999", duration: "2 DAYS" },
        { name: "BASIC RIG TRAINING FOR ROUSTABOUT", classroom: "39,999", duration: "2 DAYS" },
        { name: "ACCIDENT INVESTIGATION", classroom: "29,999", duration: "2 DAYS" },
        { name: "SAFETY AWARENESS (SA)", classroom: "24,999", duration: "2 DAYS" },
        { name: "SAFETY INDUCTION TRAINING (SIT)", classroom: "24,999", duration: "2 DAYS" },
        { name: "ELECTRICAL SAFETY (ES)", classroom: "29,999", duration: "2 DAYS" },
        { name: "JOB HAZARD ANALYSIS (JHA)", classroom: "24,999", duration: "2 DAYS" },
        { name: "WELDING AND CUTTING SAFETY (WCS)", classroom: "29,999", duration: "2 DAYS" },
        { name: "SURVIVAL AT SEA (SS)", classroom: "150,000", duration: "2 DAYS" },
        { name: "DEFENSIVE DRIVING AND JOURNEY MANAGEMENT (DDJM)", classroom: "39,999", duration: "2 DAYS" },
        { name: "MEDIC FIRST AID, AED & CPR (MFAAC)", classroom: "34,999", duration: "2 DAYS" },
        { name: "HAZARD AND EFFECTIVE MANAGEMENT PROCESS (HEMP)", classroom: "49,999", duration: "2 DAYS" },
        { name: "FORK LIFT (FL)", classroom: "39,999", duration: "2 DAYS" },
        { name: "WELDING SAFETY (WS)", classroom: "49,999", duration: "2 DAYS" },
        { name: "GAS TESTING AND BREATHING APPARATUS (GTBA)", classroom: "49,999", duration: "2 DAYS" },
        { name: "SAFE HANDLING OF CHEMICALS (SHOC)", classroom: "39,999", duration: "2 DAYS" },
        { name: "OFFICE SAFETY (OS)", classroom: "29,999", duration: "2 DAYS" },
        { name: "AUTHORIZED GAS TESTING (AGT)", classroom: "49,999", duration: "2 DAYS" },
        { name: "PERSONAL SURVIVAL SWIMMING (PSS)", classroom: "120,000", duration: "2 DAYS" },
        { name: "CONFINED SPACE ENTRY SAFETY", classroom: "29,999", duration: "2 DAYS" },
        { name: "HYDROGEN SULPHIDE TRAINING (HST)", classroom: "24,999", duration: "1 DAY" },
        { name: "PERSONAL PROTECTIVE EQUIPMENT (PPE)", classroom: "24,999", duration: "1 DAY" },
        { name: "FIRE PREVENTION AND FIRE FIGHTING (FPFF)", classroom: "29,999", duration: "1 DAY" },
        { name: "Diploma in Operations Management", classroom: "50,000", duration: "4 DAYS" },
        { name: "Facility Management - Maintenance and Repair", classroom: "49,999", duration: "4 DAYS" },
        { name: "OIL AND GAS SAFETY MANAGEMENT SYSTEM", classroom: "60,000", duration: "4 DAYS" },
        { name: "WELL SITE PREPARATION AND DRILLING", classroom: "50,000", duration: "4 DAYS" },
        { name: "WELL SITE COMPLETION AND SERVICING", classroom: "70,000", duration: "4 DAYS" },
        { name: "OIL AND GAS WELL INSPECTION", classroom: "80,000", duration: "4 DAYS" },
        { name: "OIL SPILL CLEANUP", classroom: "50,000", duration: "3 DAYS" }
      ];
      

export default function TableCourses() {
    const [entries, setEntries] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(coursesData.length / entries);
  
    const displayedCourses = coursesData.slice(
      (currentPage - 1) * entries,
      currentPage * entries
    );
  
    const handleEntriesChange = (event) => {
      setEntries(Number(event.target.value));
      setCurrentPage(1); // Reset to the first page when changing the number of entries
    };
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Courses</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Show entries:
            <select
              value={entries}
              onChange={handleEntriesChange}
              className="ml-2 p-2 border rounded-md shadow-sm"
            >
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </label>
        </div>
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="lg:px-6 pr-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AVAILABLE COURSES</th>
              <th className="lg:px-6 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CLASSROOM (N)</th>
              <th className="lg:px-6 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DURATION</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedCourses.map((course, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="lg:px-6 pr-3 py-4 text-sm font-medium text-gray-900">{course.name}</td>
                <td className="lg:px-6 px-3 py-4 text-sm text-gray-500">{course.classroom}</td>
                <td className="lg:px-6 px-3 py-4 text-sm text-gray-500">{course.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            Showing {entries * (currentPage - 1) + 1} to {Math.min(entries * currentPage, coursesData.length)} of {coursesData.length} entries
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-md disabled:bg-gray-300"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-md disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
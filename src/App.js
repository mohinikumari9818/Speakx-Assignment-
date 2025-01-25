import React, { useState, useEffect, useCallback } from "react";
import Search from "./Search";
import QuestionList from "./QuestionList";
import Pagination from "./Pagination";
import Loading from "./Loading";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [ques, setQues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const Size = 10; // Number of items per page

  const fetchQues = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      // Simulating API call (replace with actual API call)
      const data = [
        { id: 1, title: "What is React?", type: "Frontend" },
        { id: 2, title: "What is use of Redux?", type: "Frontend" },
        { id: 3, title: "How react overtake Javascript?", type: "Frontend" },
        { id: 4, title: "How Hooks can be used in React?", type: "Frontend" },
        { id: 5, title: "What is Node.js?", type: "Backend" },
        { id: 6, title: "What are some famous devops tools?", type: "DevOps" },
        { id: 7, title: "What is Sql?", type: "Backend" },
        { id: 8, title: "How to manage state in React?", type: "Frontend" },
        { id: 9, title: "What are core benefit of devops?", type: "DevOps" },
        { id: 10, title: "Explain REST APIs?", type: "Backend" },
      ];

      const filtered = data.filter((q) =>
        q.title.toLowerCase().includes(query.toLowerCase())
      );

      const totalFiltered = filtered.length;
      setTotalPages(Math.ceil(totalFiltered / Size));
      setQues(
        filtered.slice((currentPage - 1) * Size, currentPage * Size)
      );
    } catch (e) {
      setError("Failed to load questions. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [query, currentPage]);

  useEffect(() => {
    fetchQues();
  }, [fetchQues]);

  return (
    <div className="app">
      <h1 className="app-title">Search Questions</h1>
      <Search setQuery={setQuery} setCurrentPage={setCurrentPage} />
      {loading ? (
        <Loading />
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <QuestionList questions={ques} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
};

export default App;

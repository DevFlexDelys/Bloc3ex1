import React from 'react';
import BusinessCard from './components/BusinessCard';
import WelcomeMessage from './components/WelcomeMessage';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import InteractiveTaskList from './components/InteractiveTaskList';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <BusinessCard />
      <TaskList />
      <ProductCard />
      <InteractiveTaskList />
      <Footer />
    </div>
  );
}

export default App;
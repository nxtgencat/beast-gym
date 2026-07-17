import { useState } from 'react';
import { calculateBmi } from '../utils/bmi';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [result, setResult] = useState('');

  function handleCalculate() {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h) {
      setResult('Please enter weight and height.');
      return;
    }
    const bmi = calculateBmi(w, h);
    setResult('Your BMI is ' + bmi);
  }

  return (
    <section id="bmi" className="grid lg:grid-cols-2">
      <div className="relative h-80 lg:h-auto overflow-hidden bg-gray-700">
        <img
          src="https://placehold.co/700x600/4b5563/4b5563"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Woman wearing sports bra and armband"
        />
        <div className="absolute inset-0 bg-brand/70 [clip-path:polygon(0_0,45%_0,75%_100%,0%_100%)]"></div>
      </div>
      <div className="bg-[#f2f2f2] flex items-center justify-center p-8 sm:p-14 lg:p-20">
        <div className="bg-white shadow-xl px-8 sm:px-12 py-12 w-full max-w-md">
          <p className="text-gray-400 text-xs tracking-[0.3em] uppercase">Calculate Your</p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase mb-8">Body Mass Index</h3>
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b pb-3">
              <label htmlFor="bmi-weight" className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Weight</label>
              <div className="flex items-center gap-2">
                <input
                  id="bmi-weight"
                  type="number"
                  placeholder="70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-20 text-right outline-none text-gray-800"
                />
                <span className="text-gray-400 text-sm">Kg</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-3">
              <label htmlFor="bmi-height" className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Height</label>
              <div className="flex items-center gap-2">
                <input
                  id="bmi-height"
                  type="number"
                  placeholder="175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-20 text-right outline-none text-gray-800"
                />
                <span className="text-gray-400 text-sm">Cm</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-3">
              <label htmlFor="bmi-age" className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Age</label>
              <div className="flex items-center gap-2">
                <input
                  id="bmi-age"
                  type="number"
                  placeholder="25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-20 text-right outline-none text-gray-800"
                />
                <span className="text-gray-400 text-sm">Year</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-3">
              <label htmlFor="bmi-gender" className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Gender</label>
              <select
                id="bmi-gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="outline-none text-gray-800 text-right bg-transparent"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleCalculate}
            className="w-full bg-brand text-white text-xs font-bold tracking-widest py-4 mt-8 flex items-center justify-center gap-2 hover:bg-black transition cursor-pointer"
          >
            CALCULATE BMI
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">{result}</p>
        </div>
      </div>
    </section>
  );
}

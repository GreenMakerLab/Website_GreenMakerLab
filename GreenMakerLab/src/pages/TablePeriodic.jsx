import { useState } from 'react';
import { elements } from '../components/periodicElements';
import { Link } from 'react-router-dom';
import { handleElementClick, renderElementVideo, renderColumn } from '../components/FunctionsElements';

function TablePeriodic() {
  const [selectedElement, setSelectedElement] = useState(null);
  
  return (
    <section className="mx-auto min-h-screen overflow-x-hidden">
      {selectedElement ? (
        <div className="flex items-center justify-center">
          {renderElementVideo(selectedElement, setSelectedElement)}
        </div>
      ) : ( 
        <div className="flex  justify-center mx-auto min-h-screen bg-Periodic">
          <div className="w-full">
            <div className="flex flex-row justify-evenly font-bold xl:gap-40 xs:gap-10 text-white text-center">
              <Link to="/Humanitarian" className="w-1/4 xs:text-[10px] xl:text-lg  transition-transform duration-600 ease-in-out hover:scale-110">
                <h3>Humanitarian <br /> Elements</h3>
              </Link>
              <div className="relative group w-1/4 xl:ml-20 xs:ml-4 xs:text-[10px] xl:text-lg            transition-transform  duration-600 ease-in-out hover:scale-105 z-10">
                <Link 
                  to="/GreenChemistry" 
                >
                  <h3>Green Chemistry and Green Engineering Elements</h3>
                </Link>

                <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-md p-2 xs:p-0 z-50">
                  <ul className="grid xl:grid-cols-3 xl:w-96 xl:gap-4 xs:grid-cols-2 xs:gap-2 ">
                  <li>
                        <Link to="/PreventWaste" className="hover:text-PreventWaste">
                          Prevent Wast
                        </Link>
                      </li>
                      <li>
                        <Link to="/AtomEconomy" className="hover:text-AtomEconomy">
                          Atom Economy
                        </Link>
                      </li>
                      <li>
                        <Link to="/LessHazardous" className="hover:text-LessHazardous">
                          Less Hazardous
                        </Link>
                      </li>
                      <li>
                        <Link to="/MolecularDesign" className="hover:text-MolecularDesign">
                          Molecular Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/Solvents" className="hover:text-Solvents">
                          Solvents
                        </Link>
                      </li>
                      <li>
                        <Link to="/Energy" className="hover:text-Energy">
                          Energy
                        </Link>
                      </li>  
                      <li>
                        <Link to="/Renewable" className="hover:text-Renewable">
                          Renewable
                        </Link>
                      </li>  
                      <li>
                        <Link to="/Catalysis" className="hover:text-Catalysis">
                          Catalysis
                        </Link>
                      </li>  
                      <li>
                        <Link to="/Degradation" className=" hover:text-Degradation ">
                          Degradation
                        </Link>
                      </li>  
                      <li>
                        <Link to="/Measurement" className=" hover:text-Measurement">
                          Measurement
                        </Link>
                      </li>  
                    </ul>
                  </div>
                </div>
              <div className="relative group  w-1/4  xs:ml-4 xs:text-[10px] xl:text-lg  transition-transform duration-600 ease-in-out hover:scale-105 z-10 ">
                <Link to="/EnablingSystem" >  
                  <h3>Enabling System <br /> Conditions Elements</h3>
                </Link>
                <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-md p-2   "> 
                  <ul className="grid grid-col-2 gap-4" >
                  <li>
                      <Link to="/Frameworks" className="hover:text-Frameworks">
                        Frameworks
                      </Link>
                    </li>
                    <li>
                      <Link to="/EconomyMarket" className="hover:text-Market">
                        Economics and Market Forces
                      </Link>
                    </li>
                    <li>
                      <Link to="/Metrics" className="hover:text-Metrics">
                        Metrics
                      </Link>
                    </li>
                    <li>
                      <Link to="/Policies" className="hover:text-Policie">
                        Policies and Regulations
                      </Link>
                    </li>
                    <li>
                      <Link to="/Tools" className="hover:text-Tools">
                       Tools
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="/NobleElements" className="w-1/4  xs:text-[10px] xl:text-lg transition-transform duration-600 ease-in-out hover:scale-110 ">
                <h3>Noble <br /> Elements</h3>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center mb-10 overflow-hidden ">
              {renderColumn(elements, 0, 7, false, 0, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 7, 13, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 13, 17, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 17, 21, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 21, 25, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 25, 29, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 29, 33, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 33, 37, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 37, 41, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 41, 45, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 45, 49, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 49, 53, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 53, 59, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 59, 65, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 65, 71, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 71, 77, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 77, 83, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 83, 90, true, 0, handleElementClick, setSelectedElement)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default TablePeriodic;

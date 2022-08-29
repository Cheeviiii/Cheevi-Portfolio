import { skillsmap } from '../../service/skills';

export function Skills() {
  return (
    <div className="h-screen flex items-center justify-center" id="skills">
      <div className="w-full h-[500px] flex items-center">
        <div className="w-full p-10 flex flex-col lg:flex-row items-center justify-center gap-4 bg-[#141414] border-4 border-[#303030] ">
          <div className="flex flex-col items-center my-10">
            <h1 className="font-medium text-3xl uppercase">Skills</h1>
            <div className='p-10'>
              <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
                {skillsmap.map(item => (
                  <img src={item.image}  className="w-24"/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

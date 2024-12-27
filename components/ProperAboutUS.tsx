'use client'
import { MoveRight, ViewIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnhancedQAForm from "./EnhancedQAForm";

export const Hero3 = () => (
  <div className="w-full  h-full">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="text-purple-300">Welcome to </span>
                <span className="text-purple-400 whitespace-nowrap">Neuro<span className="text-purple-500">reach</span></span>
                </h1>
                <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                    NeuroReach is a registered student group at the University of Alberta, Canada founded in August 2023. We aim to expose high school students to the field of neuroscience, with a focus on groups traditionally underrepresented in the field. 
                </p>

                <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                    We have thus far reached over 500 students through our initiatives. Our annual in-person symposium immerses high school students in the field of neuroscience through lab tours, workshops, and presentations from researchers that highlight the latest developments in the field. At the same time, our Brain Health Initiative, a virtual presentation series, has brought information about neuroscience basics, brain health, neuroscience careers and the university experience into high school classrooms across Alberta. 
                </p>

                <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                    We also provide several easily accessible resources to students, including a Q and A column for high school students to ask questions to neuroscience students, and an upcoming video series to help students increase their scientific literacy and read papers more effectively. 
                </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium rounded-lg shadow-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105" variant="outline">
               View Events<ViewIcon className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 bg-purple-500 hover:bg-purple-700 text-white text-lg font-medium rounded-lg shadow-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              Get involved<MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square">
            <EnhancedQAForm></EnhancedQAForm>
        </div>
      </div>
    </div>
  </div>
);
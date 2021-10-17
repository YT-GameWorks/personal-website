import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Button,
} from "@vechaiui/react";

function FormInput() {
  return (
    <section className="dark text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Want to talk to me? Input your details here and get direct <br />
            contact! Or Contact me via discord: Game Glide#4212
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <FormControl className="relative">
                <FormLabel className="leading-7 text-sm text-gray-400">
                  Name
                </FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Game Glide"
                  color="indigo"
                  variant="solid"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </FormControl>
            </div>
            <div className="p-2 w-1/2">
              <FormControl className="relative">
                <FormLabel className="leading-7 text-sm text-gray-400">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jon@example.com"
                  color="indigo"
                  variant="solid"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
            </div>
            <div className="p-2 w-full">
              <FormControl className="relative">
                <FormLabel className="leading-7 text-sm text-gray-400">
                  Message
                </FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I wanted to see if you could build me a....."
                  color="indigo"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></Textarea>
              </FormControl>
            </div>
            <div className="p-2 w-full">
              <Button
                className="flex mx-auto"
                type="submit"
                variant="solid"
                color="primary"
                size="lg"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormInput;

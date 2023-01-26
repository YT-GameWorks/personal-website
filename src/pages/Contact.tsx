import React, { useState } from "react";
import { VechaiProvider } from "@vechaiui/react";
import { theme } from "../themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Button,
  useNotification,
} from "@vechaiui/react";
import emailjs from "emailjs-com";

function Contact({ userID, templateID, serviceID }) {
  const [name, setName] = useState<string>(null);
  const [emailAddress, setEmailAddress] = useState<string>(null);
  const [message, setMessage] = useState<string>(null);

  const notification = useNotification();

  return (
    <div>
      <Navbar />
      <VechaiProvider theme={theme} colorScheme='cool'>
        <section className='dark text-gray-400 bg-gray-900 body-font'>
          <div className='container px-5 pb-24 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
                Contact Me
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                Want to talk to me? Input your details here and get direct{" "}
                <br />
                contact! Or Contact me via discord: Game Glide#4212
              </p>
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <form className='flex flex-wrap -m-2'>
                <div className='p-2 w-1/2'>
                  <FormControl className='relative'>
                    <FormLabel className='leading-7 text-sm text-gray-400 animate__animated animate__fadeInDown'>
                      Name
                    </FormLabel>
                    <Input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Game Glide'
                      color='indigo'
                      variant='solid'
                      className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out animate__animated animate__pulse animate_delay-2s'
                      onChange={(e) => {
                        if (e.target.value === "") {
                          setName(null);
                        } else {
                          setName(e.target.value);
                        }
                      }}
                    />
                  </FormControl>
                </div>
                <div className='p-2 w-1/2'>
                  <FormControl className='relative'>
                    <FormLabel className='leading-7 text-sm text-gray-400 animate__animated animate__fadeInDown'>
                      Email
                    </FormLabel>
                    <Input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='jon@example.com'
                      color='indigo'
                      variant='solid'
                      className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out animate__animated animate__pulse animate_delay-3s'
                      onChange={(e) => {
                        if (e.target.value === "") {
                          setEmailAddress(null);
                        } else {
                          setEmailAddress(e.target.value);
                        }
                      }}
                    />
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
                  </FormControl>
                </div>
                <div className='p-2 w-full'>
                  <FormControl className='relative'>
                    <FormLabel className='leading-7 text-sm text-gray-400 animate__animated animate__fadeInDown'>
                      Message
                    </FormLabel>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder='I wanted to see if you could build me a.....'
                      color='indigo'
                      className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out animate__animated animate__pulse animate_delay-4s'
                      onChange={(e) => {
                        if (e.target.value === "") {
                          setMessage(null);
                        } else {
                          setMessage(e.target.value);
                        }
                      }}
                    ></Textarea>
                  </FormControl>
                </div>
                <div className='p-2 w-full animate__animated animate__pulse animate__repeat-2'>
                  {!name || !emailAddress || !message ? (
                    <Button
                      className='flex mx-auto'
                      type='submit'
                      variant='solid'
                      color='primary'
                      size='lg'
                      disabled
                    >
                      Send
                    </Button>
                  ) : (
                    <Button
                      className='flex mx-auto'
                      type='submit'
                      variant='solid'
                      color='primary'
                      size='lg'
                      onClick={async (e) => {
                        e.preventDefault();

                        emailjs.init(userID);

                        await emailjs
                          .send(serviceID, templateID, {
                            from_name: name,
                            to_name: emailAddress,
                            message: message,
                          })
                          .then(
                            (result) => {
                              notification({
                                title: "Success!",
                                description:
                                  "Your message was sent! You'll receive a reply asap!",
                                status: "success",
                                position: "bottom-right",
                              });

                              console.log(result.text);
                            },
                            (error) => {
                              notification({
                                title: "Failed!",
                                description: `Your message was not sent! Error: ${error.text}`,
                                status: "error",
                                position: "bottom-right",
                              });

                              console.log(error.text);
                            }
                          );

                        setName(null);
                        setEmailAddress(null);
                        setMessage(null);
                      }}
                    >
                      Send
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </VechaiProvider>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      userID: process.env.USER_ID,
      templateID: process.env.TEMPLATE_ID,
      serviceID: process.env.SERVICE_ID,
    },
  };
}

export default Contact;

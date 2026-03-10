'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { MoveRightIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { ABOUT } from '@/data/about';
import { fadeUp, stagger } from '@/lib/motion';

import { Button } from '../ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '../ui/input-group';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(50, 'Name must be at most 50 characters.'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters.')
    .max(500, 'Message must be at most 500 characters.'),
});

type ContactForm = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', name: '', message: '' },
  });

  const onSubmit = (values: ContactForm) => {
    console.log(values);
  };

  return (
    <div className='wrapper' id='contact'>
      <div className='mx-auto flex h-full w-full max-w-6xl flex-col items-center gap-16 py-30'>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='flex w-full flex-row'
        >
          <motion.div
            variants={fadeUp}
            className='text-muted-foreground w-80 min-w-80 text-sm font-light uppercase'
          >
            06 — Contact
          </motion.div>
          <motion.p
            variants={fadeUp}
            className='text-foreground text-4xl font-bold'
          >
            Let&apos;s work
            <br />
            <span className='text-primary italic'>together.</span>
          </motion.p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='flex w-full flex-row gap-20'
        >
          <motion.div variants={fadeUp} className='flex w-1/2 flex-col gap-8'>
            <p className='text-muted-foreground text-sm'>
              Have a project in mind, a role to fill, or just want to say hello?
              <br />
              I&apos;m always open to discussing new opportunities and
              <br /> interesting challenges.
            </p>
            <Link
              href={`mailto:${ABOUT.email}`}
              className='hover:border-primary flex w-fit flex-row items-center gap-4 border-b pb-4 text-sm transition-colors duration-200'
            >
              {ABOUT.email} <MoveRightIcon size={14} className='text-primary' />
            </Link>
            <div className='flex flex-col gap-2'>
              <p className='text-muted-foreground text-xs uppercase'>
                Based in
              </p>
              <p className='text-foreground text-sm'>{ABOUT.location}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-muted-foreground text-xs uppercase'>
                Timezone
              </p>
              <p className='text-foreground text-sm'>{ABOUT.timezone}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-muted-foreground text-xs uppercase'>
                Availability
              </p>
              <p className='text-sm text-green-400'>{ABOUT.availability}</p>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            id='form-rhf-demo'
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-1/2'
          >
            <FieldGroup className='gap-4'>
              <Controller
                name='email'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor='form-rhf-demo-title'
                      className='text-muted-foreground text-xs font-normal uppercase'
                    >
                      Email address
                    </FieldLabel>
                    <Input
                      {...field}
                      id='form-rhf-demo-title'
                      aria-invalid={fieldState.invalid}
                      placeholder='you@example.com'
                      autoComplete='off'
                      className='placeholder:text-xs [&]:text-xs'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='name'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor='form-name'
                      className='text-muted-foreground text-xs font-normal uppercase'
                    >
                      Your name
                    </FieldLabel>
                    <Input
                      {...field}
                      id='form-name'
                      aria-invalid={fieldState.invalid}
                      placeholder='John Smith'
                      autoComplete='off'
                      className='placeholder:text-xs [&]:text-xs'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='message'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor='form-message'
                      className='text-muted-foreground text-xs font-normal uppercase'
                    >
                      Message
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id='form-message'
                        placeholder='Tell me about your project or opportunity...'
                        rows={6}
                        className='min-h-24 resize-none placeholder:text-xs [&]:text-xs'
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align='block-end'>
                        <InputGroupText className='text-xs tabular-nums'>
                          {field.value.length}/100 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Button className='bg-primary w-full cursor-pointer justify-start text-xs'>
                Send message
              </Button>
            </FieldGroup>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

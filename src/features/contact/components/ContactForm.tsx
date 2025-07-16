'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormData, contactSchema } from '@/schema'
import { Button, Input, Textarea } from '@/components'
import { EmailIcon, MessageIcon, PhoneIcon, SendIcon, UserIcon } from '@/icons'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const nameValue = watch('name')
  const emailValue = watch('email')
  const phoneValue = watch('phone')
  const messageValue = watch('message')

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form data:', data)
    // await sendToAPI(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-lg bg-white p-4 shadow-md'
    >
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Input
          type='text'
          placeholder='Imię i Nazwisko'
          icon={UserIcon}
          colSpan={2}
          {...register('name')}
          valueState={nameValue}
          errorMessage={errors.name?.message}
        />
        <Input
          type='email'
          placeholder='E-Mail'
          icon={EmailIcon}
          {...register('email')}
          valueState={emailValue}
          errorMessage={errors.email?.message}
        />
        <Input
          type='tel'
          placeholder='Numer Telefonu'
          icon={PhoneIcon}
          {...register('phone')}
          valueState={phoneValue}
          errorMessage={errors.phone?.message}
        />
      </div>

      <Textarea
        {...register('message')}
        placeholder='Treść wiadomości'
        icon={MessageIcon}
        rows={12}
        valueState={messageValue}
        errorMessage={errors.message?.message}
      />

      <Button
        type='submit'
        color='primary'
        size='md'
        disabled={isSubmitting}
        className='w-36'
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
        <SendIcon />
      </Button>
    </form>
  )
}

export default ContactForm

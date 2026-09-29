import { useId, useState } from 'react';
import Icon from './Icon';
import ui from '@/data/ui.json';

export default function EnquiryForm({ data }) {
  const id = useId();
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const file = fields.get('Resume');
    if (file?.size > 5 * 1024 * 1024) { setStatus('error'); setMessage(ui.forms.fileTooLarge); return; }
    setStatus('submitting'); setMessage('');
    fields.set('kind', data.kind);
    fields.set('page', window.location.pathname);
    try {
      const response = await fetch(import.meta.env.VITE_FORM_ENDPOINT || '/api/enquiry', { method: 'POST', body: fields });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.status !== 'success') throw new Error(result?.message || ui.forms.unavailable);
      setStatus('success'); setMessage(ui.forms.success); form.reset();
    } catch (error) { setStatus('error'); setMessage(error.message || ui.forms.unavailable); }
  }
  return (
    <form className={data.className || 'contact-form'} onSubmit={submit}>
      {data.title && <div className="contact-form-heading-wrap"><h2 className="h4">{data.title}</h2><p className="text-base text-color-700">{data.description}</p></div>}
      <div className="contact-form-inputs-wrap">
        {data.fields.map((field, index) => {
          const fieldId = `${id}-${index}`;
          const props = { id: fieldId, name: field.name, placeholder: field.placeholder,
            required: field.required, className: field.className || 'contact-input w-input',
            maxLength: field.type === 'textarea' ? 5000 : 256 };
          return <div className="form-field" key={fieldId}>
            <label className="sr-only" htmlFor={fieldId}>{field.placeholder || field.name}</label>
            {field.type === 'textarea' ? <textarea {...props} /> : <input {...props} type={field.type}
              accept={field.accept || undefined} autoComplete={/name/i.test(field.name) ? 'name' : /email/i.test(field.name) ? 'email' : /phone/i.test(field.name) ? 'tel' : undefined} />}
          </div>;
        })}
      </div>
      <div className="form-honeypot" aria-hidden="true"><label htmlFor={`${id}-website`}>Website</label><input id={`${id}-website`} name="website" autoComplete="off" tabIndex={-1} /></div>
      <button className="btn-primary" type="submit" disabled={status === 'submitting'}>
        <span className="form-submit-content">
          {status === 'submitting' && <Icon name="LoaderCircle" className="form-submit-spinner" />}
          <span>{status === 'submitting' ? ui.forms.submitting : data.submitLabel}</span>
          {status !== 'submitting' && <Icon name="ArrowUpRight" />}
        </span>
      </button>
      {message && <p className={`form-message ${status}`} role={status === 'error' ? 'alert' : 'status'}>{message}</p>}
    </form>
  );
}

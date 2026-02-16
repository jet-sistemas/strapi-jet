export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  forgotPassword: {
    from: env('RESEND_USER_EMAIL'),
    replyTo: env('SMTP_REPLY_TO'),
    emailTemplate: {
      subject: 'Redefinição de senha - Painel Admin',
      text: `Olá<% if (user.firstname) { %> <%= user.firstname %><% } %>!

        Você solicitou a redefinição de senha do painel administrativo.

        Use o link abaixo para definir uma nova senha (válido por tempo limitado):

        <%= url %>

        Se você não solicitou isso, ignore este email.

        Atenciosamente,
        Equipe`,
      html: (() => {
        const logoUrl = env('ASSOCIATION_LOGO_URL', '');
        const primaryColor = env('PRIMARY_COLOR', '#2563eb');
        return `
          <!DOCTYPE html>
          <html lang="pt-BR">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Redefinição de senha</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background-color: #f1f5f9; line-height: 1.6;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 520px; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.06); overflow: hidden;">
                    <tr>
                      <td style="padding: 40px 40px 24px 40px; text-align: center; background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%); border-bottom: 1px solid #e2e8f0;">
                        <h1 style="margin: 24px 0 0 0; font-size: 22px; font-weight: 700; color: #0f172a;">Redefinição de senha</h1>
                        <p style="margin: 8px 0 0 0; font-size: 15px; color: #64748b;">Painel administrativo</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 32px 40px;">
                        <p style="margin: 0 0 16px 0; font-size: 16px; color: #334155;">Olá<% if (user.firstname) { %> <strong><%= user.firstname %></strong><% } %>!</p>
                        <p style="margin: 0 0 24px 0; font-size: 15px; color: #475569;">Recebemos sua solicitação para redefinir a senha de acesso ao painel. Clique no botão abaixo para criar uma nova senha de forma segura.</p>
                        <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                          <tr>
                            <td style="border-radius: 10px; background-color: #050469;">
                              <a href="<%= url %>" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 16px; font-weight: 600; color: #ffffff !important; text-decoration: none;">Definir nova senha</a>
                            </td>
                          </tr>
                        </table>
                        <p style="margin: 24px 0 0 0; font-size: 13px; color: #94a3b8;">O link é válido por tempo limitado. Se o botão não funcionar, copie e cole no navegador:</p>
                        <p style="margin: 8px 0 0 0; font-size: 12px; word-break: break-all; color: #64748b;"><%= url %></p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 24px 40px 32px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
                        <p style="margin: 0; font-size: 13px; color: #64748b; text-align: center;">Se você não solicitou esta redefinição, ignore este e-mail. Sua senha permanecerá inalterada.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>`;
      })(),
    },
  },
});

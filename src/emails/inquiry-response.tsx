import { Tour } from "@/data/tours";

interface EmailTemplateProps {
  customerName: string;
  tourDetails?: Tour;
  message: string;
}

export const InquiryResponseTemplate = ({
  customerName,
  tourDetails,
  message,
}: EmailTemplateProps) => {
  const currentYear = new Date().getFullYear();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Nomadsafari Holidays - Inquiry Response</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9;">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header with Logo -->
                <tr>
                  <td align="center" style="padding: 30px 40px; background-color: rgb(130, 185, 75); border-radius: 8px 8px 0 0;">
                    <img src="https://www.mynomadsafariholidays.in/MNSH-LOGO/3e515213-741f-498e-add3-8b8f70b7fe4c.png" alt="My Nomadsafari Holidays" width="120" style="margin-bottom: 20px;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">My Nomadsafari Holidays</h1>
                  </td>
                </tr>
                
                <!-- Main Content -->
                <tr>
                  <td style="padding: 40px;">
                    <p style="margin-bottom: 20px;">Dear ${customerName},</p>
                    <p style="margin-bottom: 20px;">${message}</p>
                    
                    ${tourDetails ? `
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 4px; margin-bottom: 20px;">
                      <h3 style="color: rgb(130, 185, 75); margin-top: 0;">Tour Details</h3>
                      <p><strong>Tour:</strong> ${tourDetails.title}</p>
                      <p><strong>Duration:</strong> ${tourDetails.duration}</p>
                      <p><strong>Location:</strong> ${tourDetails.location}</p>
                    </div>
                    ` : ''}

                    <p style="margin-bottom: 20px;">If you have any questions, please don't hesitate to contact us.</p>
                    
                    <p style="margin-bottom: 10px;">Best regards,</p>
                    <p style="margin-bottom: 20px;">The My Nomadsafari Holidays Team</p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 30px 40px; background-color: #f5f5f5; border-radius: 0 0 8px 8px;">
                    <table width="100%">
                      <tr>
                        <td>
                          <p style="margin: 0; color: #666666; font-size: 14px;">
                            <strong>My Nomadsafari Holidays</strong><br>
                            Email: info@mynomadsafariholidays.in<br>
                            Website: www.mynomadsafariholidays.in
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Copyright -->
                <tr>
                  <td style="padding: 20px; text-align: center;">
                    <p style="margin: 0; color: #999999; font-size: 12px;">
                      © ${currentYear} My Nomadsafari Holidays. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}; 
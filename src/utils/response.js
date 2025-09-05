export const sendResponse = (res, success, status, message, data) => {
    return res.status(status).json({
        success: success,
        status: status,
        data: data || [],
        message: message
    })
} 